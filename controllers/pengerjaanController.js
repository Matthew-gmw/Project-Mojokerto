const { Pengerjaan, PengerjaanDetail } = require("../models");
const { resSukses, resError } = require("../helpers/response");
const db = require("../models/index");
const { json, Model } = require("sequelize");

exports.create = async (req, res) => {
  const transaction = await db.sequelize.transaction();
  try {
    const body = req.body;
    const pengerjaan = await Pengerjaan.create(
      {
        ...body,
      },
      req.sequelizeOptions
    );
    const pengerjaanDetail = await Promise.all(
      body.detail.map((detail) =>
        PengerjaanDetail.create(
          { ...detail, id_pengerjaan: pengerjaan.id },
          req.sequelizeOptions
        )
      )
    );
    const result = {
      ...pengerjaan.toJSON(),
      detail: pengerjaanDetail.map((detail) => detail.toJSON()),
    };
    await transaction.commit();
    return resSukses(res, 200, "BERHASIL MEMBUAT PENGERJAAN", result);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};

exports.getAll = async (req, res) => {
  try {
    const { jumlah_peserta } = req.query;
    whereCondition = {};
    if (jumlah_peserta) {
      whereCondition.jumlah_peserta = jumlah_peserta;
    }
    const pengerjaan = await Pengerjaan.findAll({
      where: whereCondition,
      include: [
        {
          model: PengerjaanDetail,
        },
      ],
    });
    if (pengerjaan.length === 0) {
      return resError(res, 400, "DATA PENGERJAAN TIDAK DITEMUKAN");
    }

    return resSukses(res, 200, "BERHASIL MENGAMBIL DATA", pengerjaan);
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};

exports.update = async (req, res) => {
  const transaction = await db.sequelize.transaction();
  try {
    const body = req.body;
    const cekPengerjaan = await Pengerjaan.findByPk(body.id);
    if (!cekPengerjaan) {
      await transaction.rollback();
      return resError(res, 400, "PENGERJAAN TIDAK DITEMUKAN");
    }
    await cekPengerjaan.update(
      {
        ...body,
      },
      { transaction }
    );
    const up = await Pengerjaan.findByPk(body.id, {
      include: [{ model: PengerjaanDetail }],
    });
    return resSukses(res, 200, "BERHASIL MEMPERBARUI PENGERJAAN", up);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.query;
    const cekPengerjaan = await Pengerjaan.findByPk(id);
    if (!cekPengerjaan) {
      return resError(res, 400, "PENGERJAAN TIDAK DITEMUKAN");
    }
    await cekPengerjaan.destroy();
    return resSukses(res, 200, "BERHASIL MENGHAPUS PENGERJAAN", cekPengerjaan);
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};

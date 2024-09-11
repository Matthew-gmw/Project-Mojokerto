const { Pilihan } = require("../models");
const { resSukses, resError } = require("../helpers/response");
const pilihan = require("../models/pilihan");

exports.create = async (req, res) => {
  try {
    const body = req.body;
    const pilihan = await Pilihan.create(body);
    if (!Pilihan) {
      return resError(res, 400, "GAGAL MENAMBAHKAN PILHAN");
    }
    return resSukses(res, 200, "BERHASIL MEMBUAT PILIHAN", pilihan);
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};
exports.getAll = async (req, res) => {
  try {
    const { id_soal } = req.query;
    whereCondition = {};
    if (id_soal) whereCondition.id_soal = id_soal;
    const pilihan = await Pilihan.findAll({ where: whereCondition });
    if (pilihan.length === 0) {
      return resError(res, 400, "PILIHAN TIDAK DITEMUKAN");
    }
    return resSukses(res, 200, "BERHASIL MEMBACA PILIHAN", pilihan);
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};
exports.update = async (req, res) => {
  try {
    const body = req.body;
    const cekPilihan = await Pilihan.findByPk(body.id);
    if (!cekPilihan) {
      return resError(res, 400, "PILIHAN TIDAK DAPAT DITEMUKAN");
    }
    const up = await cekPilihan.update(body);
    return resSukses(res, 200, "BERHASIL MENGUPDATE PILIHAN", up);
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};
exports.delete = async (req, res) => {
  try {
    const { id } = req.query;
    const cekPilihan = await Pilihan.findByPk(id);
    if (cekPilihan) {
      await cekPilihan.destroy({ where: id });
      return resSukses(res, 200, "SOAL BERHASIL DIHAPUS", cekPilihan);
    }
    return resError(res, 400, "SOAL TIDAK DITEMUKAN");
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};

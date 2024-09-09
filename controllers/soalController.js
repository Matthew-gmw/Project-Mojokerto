const { Soal } = require("../models");
const { resSukses, resError } = require("../helpers/response");
const soal = require("../models/soal");

exports.create = async (req, res) => {
  try {
    const body = req.body;
    const soal = await Soal.create(body);
    if (!soal) {
      return resError(res, 400, "GAGAL MENAMBAHKAN SOAL");
    }
    return resSukses(res, 200, "BERHASIL MENAMBAHKAN SOAL", soal);
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};
exports.getAll = async (req, res) => {
  try {
    const { id_assessment } = req.query;
    whereCondition = {};
    if (id_assessment) whereCondition.id_assessment = id_assessment;
    const soal = await Soal.findAll({ where: whereCondition });
    if (soal.length === 0) {
      return resError(res, 400, "SOAL TIDAK DITEMUKAN");
    }
    return resSukses(res, 200, "SOAL BERHASIL DIBUAT");
  } catch (error) {
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};
exports.update = async (req, res) => {
  try {
    const body = req.body;
    const cekSoal = await Soal.findByPk(body.id);
    if (!cekSoal) {
      return resError(res, 400, "SOAL TIDAK DAPAT DITEMUKAN");
    }
    const up = await cekSoal.update(body);
    return resSukses(res, 200, "SOAL BERHASIL DIUPDATE", up);
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};
exports.delete = async (req, res) => {
  try {
    const { id } = req.query;
    const cekSoal = await Soal.findByPk(id);
    if (cekSoal) {
      await cekSoal.destroy({ where: id });
      return resSukses(res, 200, "SOAL BERHASIL DIHAPUS", cekSoal);
    }
    return resError(res, 400, "SOAL TIDAK DITEMUKAN");
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};

const { Jawaban } = require("../models");
const { resSukses, resError } = require("../helpers/response");
const jawaban = require("../models/jawaban");

exports.create = async (req, res) => {
  try {
    const body = req.body;
    const jawaban = await Jawaban.create(body);
    if (!Jawaban) {
      return resError(res, 400, "GAGAL MENAMPILKAN JAWABAN");
    }
    return resSukses(res, 200, "BERHASIL MENAMBAHKAN JAWABAN", jawaban);
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};
exports.getAll = async (req, res) => {
  try {
    const { id_pilihan } = req.query;
    whereCondition = {};
    if (id_pilihan) whereCondition.id_pilihan = id_pilihan;
    const jawaban = await Jawaban.findAll({ where: whereCondition });
    if (jawaban.length === 0) {
      return resError(res, 400, "JAWABAN TIDAK DITEMUKAN");
    }
    return resSukses(res, 200, "BERHASIL MEMBACA JAWABAN", jawaban);
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};

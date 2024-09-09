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

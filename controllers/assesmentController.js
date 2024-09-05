const { Assessment } = require("../models");
const { resSukses, resError } = require("../helpers/response");
const assessment = require("../models/assessment");

exports.create = async (req, res) => {
  try {
    const body = req.body;
    const assesment = await Assessment.create(body);
    if (!assesment) {
      return resError(res, 400, "GAGAL MENAMBAHKAN ASSESSMENT");
    }
    return resSukses( res, 200, "BERHASIL MENAMBAHKAN DATA ASSESMENT",assesment);
  } catch (error) {
    console.error(error);
    return resError(res, 500, "ERROR");
  }
};
exports.getAll = async (req, res) => {
  try {
    const { nilai } = req.query;
    // let assessment;
    whereCondition = {};
    if (nilai) whereCondition.nilai = nilai;
    const assessment = await Assessment.findAll({ where: whereCondition });
    if (assessment.length === 0) {
      return resError(res, 400, "ASSESSMENT TIDAK DITEMUKAN");
    }
    return resSukses(
      res,
      200,
      "BERHASIL MENGAMBIL DATA ASSESSMENT",
      assessment
    );
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};

exports.update = async (req, res) => {
  try {
    const body = req.body;
    const cekAssessment = await Assessment.findByPk(body.id);
    if (!cekAssessment) {
      return resError(res, 400, "ASSESSMENT TIDAK DITEMUKAN");
    }
    const up = await cekAssessment.update(body);
    return resSukses(res, 200, "BERHASIL UPDATE", up);
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.query;
    const cekAssessment = await Assessment.findByPk(id);
    if (cekAssessment) {
      await cekAssessment.destroy({ where: id });
      return resSukses(res, 200, "BERHASIL DELETE", cekAssessment);
    }
    return resError(res, 400, "ASSESSMENT TIDAK DITEMUKAN");
  } catch (error) {
    console.error(error);
    return resError(res, 500, "TERJADI KESALAHAN SERVER");
  }
};

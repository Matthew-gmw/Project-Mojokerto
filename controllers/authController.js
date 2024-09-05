const { User } = require("../models");

const { resSukses, resError } = require("../helpers/response");

exports.register = async (req, res) => {
  try {
    const body = req.body;
    const user = await User.create(body);
    if (!user) {
      return resError(res, 404, "Gagal Menambahkan User!");
    }
    return resSukses(res, 200, "Berhasil Membuat User!", user);
  } catch (error) {
    console.error(error);
    return resError(res, 404, "Gagal Menambahkan User!");
  }
};
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return resError(res, 404, "User tidak ditemukan!");
    }
    if (user.password !== password) {
      return resError(res, 401, "Password salah!");
    }
    return resSukses(res, 200, "Berhasil login!", user);
  } catch (error) {
    console.error(error);
    return resError(res, 500, "EROR");
  }
};

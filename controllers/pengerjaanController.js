const { Pengerjaan, PengerjaanDetail } = require("../models");
const { resSukses, resError } = require("../helpers/response");
const db = require("../models/index");
exports.create = async (req, res) => {
  const transaction = await db.sequelize.transaction();
  try {
    const transaction = await db.sequelize.transaction();

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

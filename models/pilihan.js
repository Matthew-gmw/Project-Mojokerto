'use strict';
const {  Model } = require('sequelize');
const moment = require("moment-timezone");
module.exports = (sequelize, DataTypes) => {
  class Pilihan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pilihan.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      id_soal: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      url_asset:{
        type: DataTypes.UUID,
        allowNull: false,
      }, 
      createdBy: {
        type: DataTypes.STRING,
      },
      updatedBy: {
        type: DataTypes.STRING,
      },
  }, {
    sequelize,
      tableName: "Pilihan",
      hooks: {
        beforeCreate: (instance, options) => {
          instance.createdBy = options.userId;
          instance.updatedBy = options.userId;
        },
        beforeUpdate: (instance, options) => {
          instance.updatedBy = options.userId;
        },
      },
  }
);
User.prototype.toJSON = function () {
  const values = { ...this.get() };
  if (values.createdAt) {
    values.createdAt = moment(values.createdAt)
      .tz("Asia/Jakarta")
      .format("YYYY-MM-DDHH:mm:ss");
  }
  if (values.updatedAt) {
    values.updatedAt = moment(values.updatedAt)
      .tz("Asia/Jakarta")
      .format("YYYY-MM-DDHH:mm:ss");
  }
  return values;
}
  return Pilihan;
};
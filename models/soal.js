"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Soal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Soal.hasMany(models.Assessment, {
        foreignKey: "id_assessment",
      });
      Soal.belongsTo(models.Pilihan, {
        foreignKey: "id_soal",
      });
      Soal.belongsTo(models.Jawaban, {
        foreignKey: "id_soal",
      });
      // define association here
    }
  }
  Soal.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      id_assessment: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      soal_text: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      waktu_soal: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      waktu_menjawab: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      kunci_jawaban: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.STRING,
      },
      updatedBy: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "Soal",
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
  Soal.prototype.toJSON = function () {
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
  };
  return Soal;
};

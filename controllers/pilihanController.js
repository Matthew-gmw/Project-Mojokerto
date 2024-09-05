const { Pilihan } = require("../models");
const { resSukses, resError } = require("../helpers/response");
const pilihan = require("../models/pilihan")

exports.create = async
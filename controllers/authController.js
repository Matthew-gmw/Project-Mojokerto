const {
    User 
} = require("../models")

const{
    resSukses,resError
} = require("../helpers/response")

exports.register = async (req,res)=>{
    const body = req.body
    const user = await User.create(body)
    if(!user){
        return resError(res,404,"Gagal Menambahkan User!")
    }
    return resSukses(res,200,"Berhasil Membuat User!",user)
}
exports.login = async (req, res) =>{
    const { email, password } = req.body
    const user = await User.findOne({ where: { email } })
    if (!user) {
        return resError(res, 404, "User tidak ditemukan!")
    }
    if (user.password !== password) {
        return resError(res, 401, "Password salah!")
    }
    return resSukses(res, 200, "Berhasil login!", user)
}
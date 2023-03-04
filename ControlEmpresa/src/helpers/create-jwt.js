// const jwt = require ("jsonwebtoken");
// require("dotenv").config();
// const secret = process.env.SECRET_KEY;

// const generateJWT = async (eid,companyname,email) =>{
//     const payload = {eid,companyname,email};
//     try{
//         const token = await jwt.sign(payload,secret,{
//             expiresIn: "1h",
//         })
//     }catch(erro){
//         throw new Error (erro + "No se puede generar el token");
//     }
// };

// module.exports = {
//     generateJWT
// };
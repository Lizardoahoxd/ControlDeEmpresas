// const {validationResult} = require ("express-validator");

// const validateParams = async (req,res,next) =>{
//     const erros = validationResult(req);
//     if(!erros.isEmpty()){
//         return res.status(400).send({
//             ok:false,
//             erros:erros.mapped(),
//         });
//     }
//     next();
// };

// module.exports = {
//     validateParams
// };
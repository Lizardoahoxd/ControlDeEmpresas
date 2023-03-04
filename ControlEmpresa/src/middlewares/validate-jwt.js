// const {request, response} = require ("express");
// const jwt  = require ("jsonwebtoken");
// const moment = require("moment");
// const Empre = require("../models/company.model");

// const validateJWT = async (req = request,res = response, next)=>{
//     const token = req.header ("x-tokenEmpre"); //token lo que envia en las headers
//     //  si no viene el token 
//     if(!token){
//         return res.status(401).send({
//             message:"No hay token en la peticion",
//         });
//     }
//     try{
//         // decodificacion del token 
//         const payload = jwt.decode(token, process.env.SECRET_KEY);
//         // usuario se va a buscar p0or medio del id que guarda el token 
//         const empreEncontrado = await Empre.findById(payload,eid);
//         console.log(empreEncontrado);

//         // verificar si el token no ha experidado
//         if(payload.exp <= moment().unix()){
//             return res.status(500).send({message:"el token ha experida :,("});
//         }
//         // verificar si el usuario es el dueño del token y esto a su vez ve si sigue existiendo en la base de datos
//         if(!empreEncontrado){
//             return res.status(401).send({
//                 message:"Token no valido,o el usurio no existe en la base de datos",
//             });
//         }
//         req.Empre = empreEncontrado;
//     //le dice al programa que continue con el siguiente middleware
//         next();
//     }catch(err){
//         throw new Error (err);
//     }
// };

// module.exports = {
//     validateJWT
// };
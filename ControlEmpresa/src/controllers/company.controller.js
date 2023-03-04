"use Strict"

const Empresa = require('../models/company.model');
const bcrypt = require('bcrypt');
// const { generateJWT } = require('../helpers/create-jwt');

//--------------------------CRUD----------------------------
//------------------------Agregar----------------------------
const createEmpreesa = async(req, res) => {
    const {email,password} = req.body;

    try{
        let compa = await Empresa.findOne({email});
        if(compa){
            return res.status(400).send({
                message:"Ya existe una empresa con este nombre",
                ok:false,
                compa:compa,
            });
        }
        compa = new Empresa(req.body);
        const saltos = bcrypt.genSaltSync();
        compa.password = bcrypt.hashSync(password,saltos);
        compa = await compa.save();

        return res.status(200).send({
            message:`${email} se creo correctamente`,
        });
    }catch(err){    
        throw new Error (err);
    }
};
//--------------------------Listarr----------------------------
const listEmpresa = async(req, res) =>{
    try {
        const empre = await Empresa.find();
        if (!empre) {
            res.status(404).send({message:"No hay datos disponibles"});
        } else {
            res.status(200).json({"Compañia encontrada":empre});
        }
    } catch (err) {
        throw new Error(err);
    }
};

//----------------------------Editar----------------------------
const updateEmpresa = async (req,res) =>{
    // if (req.empre.companyname === ) 
    try{
        const id = req.params.id;
        const empreedit = {...req.body};
        // encriptar la contrase;a 
        empreedit.password = empreedit.password
        ? bcrypt.hashSync = (empreedit.password,bcrypt.genSaltSync())
        : empreedit.password;
        const compaComplete = await Empresa.findByIdAndUpdate(id,empreedit,{
            new:true,
        });
        if(compaComplete){
            return res.status(200).send({
                message:"Empresa actualizada correctamente", compaComplete
            });
        }else{
            res.status(404).send({message:"Esta empresa no existe en la base de datos"})
        }
    }catch(erro){
        throw new Error (erro); 
    }
};

//------------------------------Eliminar----------------------------
const deleteEmpresa = async (req,res)=>{
    try{
        const id = req.params.id;
        const empredelete = await Empresa.findByIdAndDelete(id);
        return res.status(200).send({
            message:"Empresa eliminada correctamnte",Empresa:empredelete});
    }catch(erro){
        throw new Error (erro);
    }
};
//-------------------------Surcursal----------------------------
//--------------------------Agregar-----------------------------------
const agregarSurcursal = async(req,res)=>{
    try{
        const id = req.params.id;
        const {nombreCompany,location} = req.body;
        const compaSurcursal = await Empresa.findByIdAndUpdate(
            id,{
                $push:{
                    branchOffice:{
                        nombreCompany:nombreCompany,
                        location:location,
                    },
                },
            },
            {new:true}
        );
        if(!compaSurcursal){
            return res.status(404).send({message:"Sucursal no encontradas"});
        }
        return res.status(200).send({compaSurcursal});
    }catch(err){
        throw new Error(err)
    }
};

//------------------------LISTAR----------------------------
const listsorcul = async (req,res)=>{
    
};
//------------------------EDITAR----------------------------
const updatesorcul = async (req,res)=>{

};

//------------------------ELIMINAR----------------------------
const deletesorcul = async (req,res)=>{

};
    // Login
// const loginEmpre = async (req,res) => {
//     const {email,password} = req.body;
//     try{
//         const empre = await Empresa.findOne({email});
//         if(!Empresa){
//             return res .status(400).send({
//                 ok:false,message:"La empresano existe"
//             })
//         }
//         const validaPassword = bcrypt.compareSync(
//             password /*el que nosotros enviamos*/,
//             empre.password /*password registrado en la base de datos*/
//         );
//         if(!validaPassword){
//             return res .status(400).send({
//                 ok:false, message: "El password es incorrecto"
//             });
//         }

//         const token = await generateJWT (empre.id, empre.companyname,empre.email);
//         res.json({
//             ok:true,
//             eid: empre.id,
//             companyname: empre.companyname,
//             emial: empre.email,
//             token,
//         });
//     }catch(err){
//         throw new Error (err)
//     }
// };
 
module.exports = {
    createEmpreesa,
    listEmpresa,
    updateEmpresa,
    deleteEmpresa,
    // Surcursal 
    agregarSurcursal,
    listsorcul,
    updatesorcul,
    deletesorcul,
};
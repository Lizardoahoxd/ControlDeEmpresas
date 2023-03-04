"use strict";

const { Router } = require('express');
const { createEmpreesa, 
        listEmpresa, 
        updateEmpresa, 
        deleteEmpresa, 
        agregarSurcursal} 
        = require("../controllers/company.controller");
// const { check } = require ("express-validator");
// const { validateParams } = require('../middlewares/validate-params');
// const { validateJWT } = require("../middlewares/validate-jwt");

const api = Router();
//------------------------Agregar----------------------------
api.post(
    "/create-empresa",
    // [
    //     check("companyname","La compañia es obligatoria").not().isEmpty(),
    //     check("password","El password debe ser mayor a 6 digitos").isLength({
    //         min: 6,
    //     }),
    //     check("email","El email es obligatorio").not().isEmpty(),
    //     validateParams,
    // ],
    createEmpreesa
);

//------------------------Listar----------------------------
api.get("/read-empresa",listEmpresa);

//------------------------Editar----------------------------
api.put(
    "/update-empresa/:id",
    // [
    //     validateJWT,
    //     check("companyname","La empresa es obligatorio").not().isEmpty(),
    //     validateParams,
    // ],
    updateEmpresa
);

//------------------------Eliminar----------------------------

api.delete("/delete-empresa/:id",deleteEmpresa);


api.put("/create-surcursal/:id",agregarSurcursal);



module.exports = api;
"use Strict";

const express = require("express");
const app = express();
const {connection} = require("./src/database/connection");
require ("dotenv").config();
const port = process.env.PORT;
const routes  = require("./src/routes/company.routes");
// let port = 3000;

//base de datos
connection();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/api", routes);

app.listen(port,() =>{
    console.log(`El servidor esta corriendo en el puerto ${port}`);
});



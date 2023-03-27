const express = require("express");

const app = express()
const  winston = require('winston');
const expressWinston = require("express-winston");
require("winston-mongodb");

const log= app.use(expressWinston.logger({
    statusLevels :true,
  transports: [
   
    //creating file for store looges....
    new winston.transports.File({
        level:"silly",
        json : true,
        filename:"logs.json"
    }),
    //conected to database for store the looges
    new winston.transports.MongoDB({
        level:"info",
        db: "mongodb://127.0.0.1:27017/mar25logs",
        json :true
    })
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
}));




module.exports={log}
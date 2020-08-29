import * as fs from "fs";
import { createConnection } from "mysql";
import Config from "../settings/config";
import {IDBConfig} from "./interfaces/db-config";
import { IUser } from "./entitys/user";

const config = Config.getInstance()

const dbConfig : IDBConfig = {
    host : config.host,
    port : config.port,
    user : config.user,
    password : config.password
}

const dbConnection = createConnection(dbConfig);

const dbCreate = fs.readFileSync(__dirname +'\\sql\\create.sql').toString();
const dbUse = fs.readFileSync(__dirname +'\\sql\\use.sql').toString();

dbConnection.connect((error) => {
    if (error) {
        console.log("SQL CONNECTION ERROR: ", error.message)
    }else{
        dbConnection.query(dbCreate,(error) => {
            if(error) {
                console.log("SQL QUERY ERROR: ", error.message)
            }
        })
        dbConnection.query(dbUse,(error) => {
            if(error) {
                console.log("SQL QUERY ERROR: ", error.message)
            }
        })
        console.log("SQL connection successfully")
    }
})

export function addNewUser(user : IUser) {
    dbConnection.query('SELECT 1');
}
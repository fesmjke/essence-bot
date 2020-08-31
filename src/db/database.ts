import * as fs from "fs";
import { createConnection } from "mysql";
import Config from "../settings/config";
import {IDBConfig} from "./interfaces/db-config";
import { IUser } from "./interfaces/user";

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
const dbUser = fs.readFileSync(__dirname +'\\sql\\user.sql').toString();
const dbAddUser = fs.readFileSync(__dirname +'\\sql\\addUser.sql').toString();
const dbCheckUser = fs.readFileSync(__dirname +'\\sql\\checkUser.sql').toString();


dbConnection.connect((error) => {
    if (error) {
        console.log("SQL CONNECTION ERROR: ", error.message)
    }else{
        dbConnection.query(dbCreate,config.database,(error) => {
            if(error) {
                console.log("SQL QUERY ERROR: ", error.message)
            }
        })
        dbConnection.query(dbUse,config.database,(error) => {
            if(error) {
                console.log("SQL QUERY ERROR: ", error.message)
            }
        })
        dbConnection.query(dbUser,(error) => {
            if(error){
                console.log("SQL QUERY ERROR: ", error.message)
            }
        })
        console.log("SQL connection successfully")
    }
})

export const addNewUser = async (user : IUser) : Promise<IUser> => {
    return new Promise<IUser>((resolve,rejects) => {
        dbConnection.query(dbAddUser,[user.userId,user.userNickname],(error,results,fields) => {
            if(error){
                console.log("SQL QUERY ERROR: ", error.message)
                rejects(error.message)
            }
            resolve()
        });
    })
}

export const checkUser = async (user : IUser) : Promise<boolean> => {
    return new Promise<boolean>((resolve,rejects) => {
        dbConnection.query(dbCheckUser,user.userId,(error,results) => {
            if(error){
                console.log("SQL QUERY ERROR: ", error.message)
                rejects(error.message)
            }
            if (results[0] === undefined)
                resolve(false)
            else
                resolve(true)
        })
    })
}
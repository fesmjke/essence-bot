import * as fs from "fs";
import { createConnection } from "mysql";
import Config from "../settings/config";
import {IDBConfig} from "./interfaces/db-config";
import { IUser } from "./interfaces/user";
import { IStatistic } from "./interfaces/statistic";

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
const dbStatistic = fs.readFileSync(__dirname +'\\sql\\statistic.sql').toString();
const dbAddStatistic = fs.readFileSync(__dirname +'\\sql\\addStatistic.sql').toString();
const dbGetStatistic = fs.readFileSync(__dirname +'\\sql\\getStatistic.sql').toString();


dbConnection.connect((error) => {
    if (error) {
        console.log("SQL CONNECTION ERROR: ", error.message)
    }else{
        dbConnection.query(dbCreate.replace('?',config.database),(error) => {
            if(error) {
                console.log("SQL QUERY (database create) ERROR: ", error.message)
            }
        })
        dbConnection.query(dbUse.replace('?',config.database),(error) => {
            if(error) {
                console.log("SQL QUERY (database use) ERROR: ", error.message)
            }
        })
        dbConnection.query(dbUser,(error) => {
            if(error){
                console.log("SQL QUERY (create user table) ERROR: ", error.message)
            }
        })
        dbConnection.query(dbStatistic,(error) => {
            if(error){
                console.log("SQL QUERY (create statistic table) ERROR: ", error.message)
            }
        })
        console.log("SQL connection successfully")
    }
})

export const addNewUser = async (user : IUser) : Promise<IUser> => {
    return new Promise<IUser>((resolve,rejects) => {
        dbConnection.query(dbAddUser,[user.userId,user.userNickname],(error,results,fields) => {
            if(error){
                console.log("SQL QUERY (add new user) ERROR: ", error.message)
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
                console.log("SQL QUERY (check user) ERROR: ", error.message)
                rejects(error.message)
            }else{
                if (results[0] === undefined)
                    resolve(false)
                else
                    resolve(true)
            }
        })
    })
}

export const addNewStatistic = async (stat : IStatistic) : Promise<boolean> => {
    return new Promise<boolean>((resolve,rejects) => {
        dbConnection.query(dbAddStatistic,[stat.userId,stat.category,stat.amountOfMoney,stat.typeOfCurrency,stat.day,stat.month,stat.year],(error,results) => {
            if(error){
                console.log("SQL QUERY (add new statistic) ERROR: ", error.message)
                rejects(error.message)
            }else{
                resolve(true)
            }
        })
    })
}

export const getDbStatistic = async (user_id : number) : Promise<IStatistic[]> => {
    return new Promise<IStatistic[]>((resolve,rejects) => {
        dbConnection.query(dbGetStatistic,user_id,(error,results) => {
            if(error){
                console.log("SQL QUERY (get statistic) ERROR: ", error.message)
                rejects(error.message)
            }else{
                const result : IStatistic[] = results.map((element : any) => {
                    return {
                        category : element.category,
                        amountOfMoney : element.amount_of_money,
                        typeOfCurrency : element.type_of_currency,
                        day : element.day_,
                        month : element.month_,
                        year : element.year_
                    }
                })
                resolve(result)
            }
        })
    })
}
import * as dotenv from "dotenv";

enum LoadStatus{
    success = "SUCCESS",
    fail = "FAIL"
}

class Config{
    private TOKEN: string;
    private PORT: string;
    constructor(){
        dotenv.config();
        this.TOKEN = "";
        this.PORT = "";
        this.init();
    }

    private async init() {
        const statusBotToken = await this.checkLoad("BOT_TOKEN")
        const statusPort = await this.checkLoad("PORT")
        if (statusBotToken === LoadStatus.success &&
            statusPort === LoadStatus.success){
            console.log("Load bot token ",statusBotToken)
            console.log("Load port  ",statusPort)
            this.TOKEN = <string>process.env.BOT_TOKEN
            this.PORT = <string>process.env.PORT
        }else{
            // exit from app if token/port/etс. is not available
            // need add to loger
            console.log("Load bot token ",statusBotToken)
            console.log("Load port  ",statusPort)
            process.exit(1);
        }
    }

    private async checkLoad(param : string) : Promise<LoadStatus> {
        switch (process.env[param]) {
            case undefined:
                return new Promise<LoadStatus>((resolve) => {
                    resolve(LoadStatus.fail);
                });
            case "":
                return new Promise<LoadStatus>((resolve) => {
                    resolve(LoadStatus.fail);
                });
            default:
                return new Promise<LoadStatus>((resolve) => {
                    resolve(LoadStatus.success);
                });
        }
    }

    public get token() : string {
        return this.TOKEN;
    }

    public get port() : string {
        return this.PORT;
    }
    
}

export default Config;
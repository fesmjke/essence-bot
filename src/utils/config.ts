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
        if (this.checkLoad("BOT_TOKEN") === LoadStatus.success &&
            this.checkLoad("PORT") === LoadStatus.success){
            this.TOKEN = <string>process.env.BOT_TOKEN;
            this.PORT = <string>process.env.PORT;
        }else{
            // exit from app if token/port/etс. is not available
            console.log("Load bot token ",this.checkLoad("BOT_TOKEN"))
            console.log("Load bot token ",this.checkLoad("PORT"))
            process.exit(1);
        }
    }

    private checkLoad(param : string) : LoadStatus {
        switch (process.env[param]) {
            case undefined:
                return LoadStatus.fail;
            case "":
                return LoadStatus.fail;
            default:
                return LoadStatus.success;
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
import * as dotenv from "dotenv";

enum LoadStatus{
    success = "SUCCESS",
    fail = "FAIL"
}

class Config{
    private static INSTANCE: Config;
    private TOKEN: string;
    private PORT: number;
    private HOST : string;
    private USER : string;
    private DATABASE : string;
    private PASSWORD : string;
    constructor(){
        dotenv.config();
        this.TOKEN = "";
        this.PORT = 0; 
        this.HOST = "";
        this.USER = "";
        this.DATABASE = "";
        this.PASSWORD = "";
        this.init();
    }

    /**
    * @returns Singleton Config.
    */
    public static getInstance() {
        if(!Config.INSTANCE){
            Config.INSTANCE = new Config();
        }
        return Config.INSTANCE
    }

    /**
    * Load environment variable.
    */
    private init() {
        const statusBotToken = this.checkLoad("BOT_TOKEN")
        const statusPort = this.checkLoad("PORT")
        const statusHost = this.checkLoad("HOST")
        const statusUser = this.checkLoad("USER")
        const statusDatabase = this.checkLoad("DATABASE")
        const statusPassword = this.checkLoad("PASSWORD")

        if (statusBotToken === LoadStatus.success &&
            statusPort === LoadStatus.success &&
            statusHost === LoadStatus.success &&
            statusUser === LoadStatus.success &&
            statusDatabase === LoadStatus.success &&
            statusPassword === LoadStatus.success ){

            console.log("Load bot token ",statusBotToken)
            console.log("Load port  ",statusPort)
            console.log("Load host ",statusHost)
            console.log("Load user  ",statusUser)
            console.log("Load database ",statusDatabase)
            console.log("Load password  ",statusPassword)
            
            this.TOKEN = <string>process.env.BOT_TOKEN
            this.PORT = parseInt(<string>process.env.PORT)
            this.USER = <string>process.env.USER
            this.HOST = <string>process.env.HOST
            this.DATABASE = <string>process.env.DATABASE
            this.PASSWORD = <string>process.env.PASSWORD
        }else{
            // exit from app if token/port/etс. is not available
            // need add to loger
            console.log("Load bot token ",statusBotToken)
            console.log("Load port  ",statusPort)
            console.log("Load host ",statusHost)
            console.log("Load user  ",statusUser)
            console.log("Load database ",statusDatabase)
            console.log("Load password  ",statusPassword)
            process.exit(1);
        }
    }

    /**
    * @param param check loaded or not environment variable.
    */
    private checkLoad(param : string) : LoadStatus {
        switch (process.env[param]) {
            case undefined:
                return LoadStatus.fail
            case "":
                return LoadStatus.fail
            default:
                return LoadStatus.success
        }
    }
    
    /**
    * @returns Config.TOKEN.
    */
    public get token() : string {
        return this.TOKEN;
    }

    /**
    * @returns Config.HOST.
    */
    public get host() : string {
        return this.HOST;
    }

    /**
    * @returns Config.USER.
    */
    public get user() : string {
        return this.USER;
    }
    
    /**
    * @returns Config.DATABASE.
    */  
    public get database() : string {
        return this.DATABASE;
    }

    /**
    * @returns Config.PASSWORD.
    */  
    public get password() : string {
        return this.PASSWORD;
    }

    /**
    * @returns Config.PORT.
    */
    public get port() : number {
        return this.PORT;
    }
    
}

export default Config;
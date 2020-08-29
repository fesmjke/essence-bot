import { TelegrafContext } from "telegraf/typings/context";
import { addNewUser } from "../../db/database";

const registrationCommand = async (ctx : TelegrafContext) => {
    if(ctx.from?.is_bot){
        return ctx.reply("You're bot, come back as real person")
    }else{
        addNewUser({
            id : 1,
            user_id : "2",
            user_first_name : 'qwe',
            user_last_name : 'se',
            user_nickname : " ",
        })
        return ctx.reply(`You have been successfully registered!`)
    }
}

export default registrationCommand;
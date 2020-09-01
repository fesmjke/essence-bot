import { TelegrafContext } from "telegraf/typings/context";
import {addNewUser,checkUser} from "../../db/database";

const registrationCommand = async (ctx : TelegrafContext) => {
    const user = {userId: <number>ctx.from?.id,
                  userNickname : <string>ctx.from?.username}
    if(await checkUser(user)){
        return ctx.reply(`You have been already registered!`)
    }
    await addNewUser(user);
    return ctx.reply(`You have been successfully registered!`)
}

export default registrationCommand;
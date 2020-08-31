import { TelegrafContext } from "telegraf/typings/context";

const isBot = async (ctx : TelegrafContext,next : any) => {
    if(ctx.from?.is_bot){
        ctx.reply("You're bot come back as real person")
        return
    }
    await next()
}

export default isBot;
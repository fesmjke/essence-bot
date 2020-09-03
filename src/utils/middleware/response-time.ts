import { TelegrafContext } from "telegraf/typings/context";

const responceTime = async (ctx : TelegrafContext,next : any) => {
    const start = new Date().getTime()
    await next()
    const ms = new Date().getTime() - start
    console.log('Response time: %sms', ms)
}

export default responceTime;
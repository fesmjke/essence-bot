import { TelegrafContext } from "telegraf/typings/context";

const startMiddleware = async (ctx : TelegrafContext) => {
    const message = `Hello ${ctx.from?.first_name}.
I'm an <b>Essence</b> bot that helps you to track your <b>money flow</b> and give you <b>statistic</b>.`
    return ctx.replyWithHTML(message);
}

export default startMiddleware;
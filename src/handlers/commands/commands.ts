import { TelegrafContext } from "telegraf/typings/context";

const message = `
/help - help information
/commands - commands list
/registration - register an account
`

const CommandList = async (ctx : TelegrafContext) => {
    return ctx.replyWithHTML(message);
}

export default CommandList;
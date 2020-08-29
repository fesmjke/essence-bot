import { TelegrafContext } from "telegraf/typings/context";

const message = `
Send /commands to get the list of available commands.
    
So if you don't wish to self-host, @VanitateBot might be a better choice for you.
`

const helpCommand = async (ctx : TelegrafContext) => {
    return ctx.replyWithHTML(message);
}

export default helpCommand;
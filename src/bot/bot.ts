import Telegraf from "telegraf";
import Config from "../settings/config"
import CommandsComposer from "../handlers/commands";
import MiddlewareComposer from "../handlers/middleware";
import isBot from "../utils/is-bot";
import respTime from "../utils/response-time";

const config = Config.getInstance()

const bot = new Telegraf(config.token);

bot.use(isBot)
bot.use(respTime)

bot.use(
    CommandsComposer,
    MiddlewareComposer
)

export default bot; 
import Telegraf from "telegraf";
import Config from "../settings/config"
import CommandsComposer from "../handlers/commands";
import MiddlewareComposer from "../handlers/middleware";

const config = Config.getInstance()

const bot = new Telegraf(config.token);

bot.use(
    CommandsComposer,
    MiddlewareComposer
)

export default bot;
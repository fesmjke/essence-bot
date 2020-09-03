import { Composer } from "telegraf";

import helpHandler from "./help";
import commandList from "./commands";
import registrationCommand from "./registration";
import setUp from "./set-up";
import addStatistic from "./add-statistic";
import addHelp from "./add-help";
import getStatistic from "./get-statistic"

const commandsComposer = new Composer();

commandsComposer.command('/help',helpHandler);
commandsComposer.command('/commands',commandList);
commandsComposer.command('/registration',registrationCommand);
commandsComposer.command('/set-up',setUp);
commandsComposer.command('/add_help',addHelp);
commandsComposer.command('/add',addStatistic);
commandsComposer.command('/get',getStatistic);

export default commandsComposer;
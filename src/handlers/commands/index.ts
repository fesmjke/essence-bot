import { Composer } from "telegraf";

import helpHandler from "./help";
import commandList from "./commands";
import registrationCommand from "./registration";

const commandsComposer = new Composer();

commandsComposer.command('/help',helpHandler);
commandsComposer.command('/commands',commandList);
commandsComposer.command('/registration',registrationCommand);

export default commandsComposer;
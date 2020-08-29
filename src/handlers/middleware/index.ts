import { Composer } from "telegraf";

import startMiddleware from "./start"

const middlewareComposer = new Composer();

middlewareComposer.use(startMiddleware);

export default middlewareComposer;
import { TelegrafContext } from "telegraf/typings/context";
import { getDbStatistic } from "../../db/database"
import { formatStatistic } from "../../utils/helpers/format-statistic";

const messageHeader = `
Category | Money | Currency | Date\n
`

const getStatistic = async (ctx : TelegrafContext) => {
    const result = await getDbStatistic(<number>ctx.from?.id);
    const formatedResult = formatStatistic(result);
    const answer = messageHeader + formatedResult.join('');
    ctx.reply(answer);
}

export default getStatistic;
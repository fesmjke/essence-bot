import { TelegrafContext } from "telegraf/typings/context";
import { checkCategory } from "../../utils/helpers/check-category";
import { isNumber } from "util";
import { getCurrentDay } from "../../utils/helpers/current-date";
import { addNewStatistic } from "../../db/database";

const addStatistic = async (ctx : TelegrafContext) => {
    const messageParts = ctx.message?.text?.split(' ');
    if(messageParts?.length !== 4){
        ctx.replyWithHTML('<b>Oops!</b> Seems like you have misstake in message length. \
                   Use /add_help command to see command usage details.')
    }
    if(!checkCategory(<string>ctx.message?.text?.split(' ')[1])){
        ctx.replyWithHTML('<b>Oops!</b> Seems like you have misstake in category-name. \
                   Use /add_help command to see command usage details.')
    }
    if(isNumber(ctx.message?.text?.split(' ')[2])){
        ctx.replyWithHTML('<b>Oops!</b> Seems like you have misstake in amount-of-used-money. \
                   Use /add_help command to see command usage details.')
    }

    if(ctx.message?.text?.split(' ')[3] !== "UAH"){
        ctx.replyWithHTML('<b>Oops!</b> Seems like you have misstake in type-of-currency. \
                   Use /add_help command to see command usage details.')
    }

    const date = getCurrentDay();

    const stat = {
        userId : <number>ctx.from?.id,
        category : <string>ctx.message?.text?.split(' ')[1],
        amountOfMoney : parseInt(<string>ctx.message?.text?.split(' ')[2]),
        typeOfCurrency : <string>ctx.message?.text?.split(' ')[3] || "UAH",
        day : date.day,
        month : date.month,
        year : date.year
    }

    if(await addNewStatistic(stat)){
        ctx.replyWithHTML('<b>Added!</b>')
    }else{
        ctx.replyWithHTML('<b>Oops!</b> Seems like somethings going wrong...')
    }
}

export default addStatistic;
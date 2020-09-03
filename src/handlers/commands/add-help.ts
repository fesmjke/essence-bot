import { TelegrafContext } from "telegraf/typings/context";

const message = `
Usage : /add category-name amount-of-used-money type-of-currency
------------
Categories names:
    Groceries
    Auto/Transport
    Clothing
    House
    Cafes/Restaurants
    Entertainment
    Vacation
    Health
    Gadgets
    Haircut
------------
Example : /add Haircut 100 UAH
Default settings : type-of-currency - UAH
`

const addHelp = async (ctx : TelegrafContext) => {
    ctx.reply(message)
}

export default addHelp;
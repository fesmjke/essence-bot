import { IStatistic } from "../../db/interfaces/statistic";

export function formatStatistic(statistic : IStatistic[]) : string[] {
    const result : string[] = statistic.map((element : IStatistic) => {
        return `${element.category} | ${element.amountOfMoney} | ${element.typeOfCurrency} | ${element.day}:${element.month}:${element.year}\n`
    })

    return result
}
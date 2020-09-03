export enum Category{
    groceries = 'Groceries',
    autoAndTransport = 'Auto/Transport',
    clothing = 'Clothing',
    house = 'House',
    cafesOrRestaurants = 'Cafes/Restaurants',
    entertainment = 'Entertainment',
    vacation = 'Vacation',
    health = 'Health',
    gadgets = 'Gadgets',
    haircut = 'Haircut'
}

export async function checkCategory(categoryToCheck : string) : Promise<boolean> {
    return new Promise<boolean>((resolve) => {
        resolve(Object.values(Category).some(categoryValue => categoryValue === categoryToCheck));
    })
}
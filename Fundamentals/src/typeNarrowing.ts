function getDrink(kind: string | number) {
    if (typeof kind == 'string') {
        return `Making ${kind}`;
    }
    return `Chai order: ${kind}`;
}

function servingDrink(msg?: string) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving Default Soda`;
}

function orderDrink(size: 'small' | 'medium' | 'large' | number) {
    if (size == 'small') {
        return `Small Cutting Soda`;
    }
    if (size == 'medium' || size == 'large') {
        return `Make Extra Soda`;
    }

    return `Free Soda ${size}`;
}


class Smoothies {
    serve() {
        return `Serving Hot Smoothies`
    }
}


class Carbonated {
    serve() {
        return `Serving Hot Carbonated`
    }
}

function serve(drink: Smoothies | Carbonated) {
    if (drink instanceof Smoothies) {
        return drink.serve();
    }
}

type DrinkOrder = {
    type: string
    sugar: number
}

function isDrinkOrder(obj: any): obj is DrinkOrder {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        typeof obj.type == 'string' &&
        typeof obj.sugar == 'number'
    )
}

function serveOrder(item: DrinkOrder | string) {
    if (isDrinkOrder(item)) {
        return `Serving ${item.type} with added Sugar = ${item.sugar}`;
    }

    return `Serving custom Drink: ${item}`
}

type MithiLassi = { type: "Mithi"; specialLevel: number };
type ChaasLassi = { type: "Chaas"; amount: number };
type DahiLassi = { type: "Dahi"; aroma: number };

type Lassi = MithiLassi | ChaasLassi | DahiLassi;

function MakeLassi(order: Lassi){
    switch (order.type) {
        case "Chaas":
            return `Chaas Lassi`;
            break;
        case "Dahi":
            return `Dahi Lassi`
            break;
        case "Mithi":
            return `Mithi Lassi`
            break;
        default:
            break;
    }
}

// function brew(order: MithiLassi | ChaasLassi){
//     if("")
// }
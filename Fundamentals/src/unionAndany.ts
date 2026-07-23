// Union type

let subs: number | string = '10';
 
let apiRequest: "pending" | "success" | 'error' = "pending";

let airline: 'aisle' | 'window' | 'middle' = 'aisle'


// Any 

const orders = ['23', '34', '32', '43'];

let currentorder: string | undefined;

for(let order of orders){
    if(order === '32'){
        currentorder = order
        break
    }
}

console.log(currentorder)
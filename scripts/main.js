const euros = [50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

const price = parseFloat(prompt("Enter the price:"));
let amount = parseFloat(prompt("Enter the amount: "));

while(amount < price) {
    amount = parseFloat(prompt(`Enter an amount bigger than ${price}:`));
}

let rest = amount - price;

for(let i = 0; i < euros.length; i++) {
    if(rest / euros[i] >= 1) {
        let x = Math.trunc(rest / euros[i]);
        rest = rest % euros[i];
        console.log(`You need ${x} time(s) of ${euros[i]}`);
        if (rest == 0) {
            console.log(`break at index ${i}`);
            break;
        }
    }
}


// euros.forEach((euro) => {  
//     if(rest / euro >= 1) {
//         let x = Math.trunc(rest / euro);
//         rest = rest % euro;
//         console.log(`You need ${x} times of ${euro}`);
//     }
// });


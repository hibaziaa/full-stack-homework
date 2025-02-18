//Write a program to input cost price and selling price of a product and check profit or loss. Also calculate total profit or loss using if else

let costPrice = 100;
let sellingPrice = 120;
let profit, loss;

if (costPrice < sellingPrice) {
  profit = sellingPrice - costPrice;
  console.log(`Profit: ${profit}`);
} else if (costPrice > sellingPrice) {
  loss = costPrice - sellingPrice;
  console.log(`Loss: ${loss}`);
} else {
  console.log("No Profit No Loss");
}

//Output: Profit: 20
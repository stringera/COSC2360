/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Alex Stringer
      Date:   09/10/2024

      Filename: project02-04.js
 */
 

const CHICKEN_PRICE = 10.95, HALIBUT_PRICE = 13.95, BURGER_PRICE = 9.95, SALMON_PRICE = 18.95, SALAD_PRICE = 7.95, SALES_TAX = 0.07;

document.getElementById('chicken').onchange = calcTotal;
document.getElementById('halibut').onchange = calcTotal;
document.getElementById('burger').onchange = calcTotal;
document.getElementById('salmon').onchange = calcTotal;
document.getElementById('salad').onchange = calcTotal;



function calcTotal() {
   let cost = 0;
   
   let buyChicken = document.getElementById('chicken').checked;
   let buyHalibut = document.getElementById('halibut').checked;
   let buyBurger = document.getElementById('burger').checked;
   let buySalmon = document.getElementById('salmon').checked;
   let buySalad = document.getElementById('salad').checked;

   cost += buyChicken ? CHICKEN_PRICE : 0;
   cost += buyHalibut ? HALIBUT_PRICE : 0;
   cost += buyBurger ? BURGER_PRICE : 0;
   cost += buySalmon ? SALMON_PRICE : 0;
   cost += buySalad ? SALAD_PRICE : 0;

   // innerHTML property for "foodTotal"
   document.getElementById('foodTotal').innerHTML = formatCurrency(cost);

   // declare tax variable
   let tax = cost * SALES_TAX;

   // innerHTML property for "foodTax"
   document.getElementById('foodTax').innerHTML = formatCurrency(tax);

   // declare totalCost variable

   let totalCost = cost + tax;

   // innerHTML property for totalBill
   document.getElementById('totalBill').innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

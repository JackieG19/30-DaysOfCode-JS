/*
Input Format:
There are  lines of numeric input: 
The first line has a double,  (the cost of the meal before tax and tip). 
The second line has an integer,  (the percentage of  being added as tip). 
The third line has an integer,  (the percentage of  being added as tax).

Output Format:
Print The total meal cost is totalCost dollars., 
where  is the rounded integer result of the entire bill ( with added tax and tip).*/


function main() {
    var meal_cost = parseFloat(readLine());
    var tip_percent = parseInt(readLine());
    var tax_percent = parseInt(readLine());
}
var totalCost;

totalCost = Math.round(mealCost + (mealCost * (tipPercent/100)) + (mealCost * (taxPercent/100)));
console.log("The total meal cost is " +totalCost+ " dollars.");
}

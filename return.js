// function sum(num1, num2) {
//     console.log(num1, num2);
//     var sum = num1 + num2;
//     return sum;
// }

// var total = sum(10, 20);

// console.log(total);

function eatingSingara (money){
    var singaraPrice = 5;
    var singaraQuantity = money/singaraPrice;
    console.log("tumi ",money,"taka diye", singaraQuantity, "singara nite parba.");
    return singaraQuantity;
}

var totalMoney = 100;
eatingSingara(totalMoney);
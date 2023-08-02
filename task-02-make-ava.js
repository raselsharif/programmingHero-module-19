

function make_avg(num1, num2, num3) {
    var total = num1 + num2 + num3;
    var avg = total / 3;
    return avg;
}

var avgIs = make_avg(50, 60, 40);

console.log(avgIs);
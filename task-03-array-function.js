

function make_avg(numbers) {

    var numbers = [50, 50, 50, 100];

    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    var arraySize = numbers.length;
    var avg = sum / arraySize;

    return avg;

}

var avgIs = make_avg();

console.log("Average number is: ", avgIs);
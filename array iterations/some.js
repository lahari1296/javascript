var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.some(myFunction);

document.getElementById("demo").innerHTML = "Some over 18 is " + allOver18;

function myFunction(value, index, array) {
    return value > 18;
}
var txt = "";
var numbers = [450, 40, 9, 16, 25];
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value, index, array) {
    txt = txt + value + "<br>"; 
}

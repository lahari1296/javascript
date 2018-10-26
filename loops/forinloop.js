var txt = "";
var person = {fname:"rani", lname:"reddy", age:25}; 
var x;
for (x in person) {
    txt += person[x] + "<br> ";
}
document.getElementById("demo").innerHTML = txt;
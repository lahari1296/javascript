var person = {firstName:"rani", lastName:"reddy", age:50}

var x = person;
x.age = 10;

document.getElementById("demo").innerHTML =
person.firstName + " is " + person.age + " years old.";
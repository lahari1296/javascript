// Create an object:
var person = {
    firstName: "rani",
    lastName : "reddy",
    language : "NO",
    set lang(value) {
       this.language = value;
    }
};
// Set a property using set:
person.lang = "en";
// Display data from the object:
document.getElementById("demo").innerHTML = person.language;
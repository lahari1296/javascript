// Create an object:
var person = {
    firstName: "rani",
    lastName : "reddy",
    language : "en",
    get lang() {
       return this.language;
    }
};
// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;
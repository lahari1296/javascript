var txt = '{"name":"lali", "age":23, "city":"hyd"}'
var obj = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age;
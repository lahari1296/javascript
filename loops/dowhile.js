var text = "rani" ;
var t =  " ";
var i = 0;

do {
   
    t+= text + " " + "<br>";
    i++;
    
}
while (i < 10);  

document.getElementById("demo").innerHTML = t;
var cost ;
function flowerPrice() {
var flower = prompt("What flower do you like"); 

switch (flower)
{
  case "rose" : 
    cost = " costs 250";
     break;
  case "daisy" : 
     cost = " costs 180";
     break;
  case "orchild" : 
     cost = " costs 300";
     break;
  default : 
     cost = "There is no such flower in our shop";
     break;
     
     
}
}
flowerPrice();
document.write(cost);
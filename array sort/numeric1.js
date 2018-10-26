var points = [400, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;    
  points.sort(function(a, b){return a - b});
    document.getElementById("demo1").innerHTML = points;
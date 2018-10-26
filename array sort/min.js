var points = [400, 100, 1, 5000, 250, 10];
document.getElementById("demo").innerHTML = myArrayMin(points);

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}
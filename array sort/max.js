var points = [400, 100, 1, 5000, 250, 10];
document.getElementById("demo").innerHTML = myArrayMax(points);

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
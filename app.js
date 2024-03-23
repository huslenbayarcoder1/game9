var span = document.getElementsByTagName("span")[0];
var count = 0;
function nemeh() {
    count++;
    span.innerText = count;
    span.style.color = "green";
}
function buurah() {
    count--;
    span.innerText = count;
    span.style.color = "red";
}
function resert1() {
    count = 0;
    span.innerText = 0;
    span.style.color = "black";
}

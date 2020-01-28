function rock() {
    var y = document.getElementById("yourChoice");
    var x = document.getElementById("cpuChoice");
    y.innerHTML = "Rock"
    if (x.innerHTML === "") {
        Math.floor(Math.random() * (3 - 1 + 1) + 1);
        cpuTurn();
    }
}

function cpuTurn() {    
    var y = document.getElementById("yourChoice");
    var x = document.getElementById("cpuChoice");
    if (x.innerHTML === "3") {
        x.innerHTML = "Scissors";
    } else if (x.innerHTML === "2"){
        x.innerHTML = "Paper";
    } else {
        x.innerHTML = "Rock";
        }
if (course == 1) {
   document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
   document.write("<h1>CSS Tutorial</h1>");
} else {
   document.write("<h1>JavaScript Tutorial</h1>");
}
}
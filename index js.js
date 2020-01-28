//------------------------------------------------------------------

//<button id="button" onclick="button0();">Rock</button>
function button0() {
    var v = document.getElementById("p1");
    var w = document.getElementById("c1");
    var x = document.getElementById("t1");
    var z = document.getElementById("button");
    var y = document.getElementById("yourChoice");
    y.innerHTML = z.innerHTML;
    setTimeout(function () { thingy(); }, 500);
    setTimeout(function () { cpuTurn(); }, 500);
    setTimeout(function () { test1(); }, 500);
}
function button1() {
    var z = document.getElementById("button1");
    var y = document.getElementById("yourChoice");
    y.innerHTML = z.innerHTML;
    setTimeout(function () { thingy(); }, 500);
    setTimeout(function () { cpuTurn(); }, 500);
    setTimeout(function () { test2(); }, 500);
}
function button2() {
    var z = document.getElementById("button2");
    var y = document.getElementById("yourChoice");
    y.innerHTML = z.innerHTML;
    setTimeout(function () { thingy(); }, 500);
    setTimeout(function () { cpuTurn(); }, 500);
    setTimeout(function () { test3(); }, 500);
}
function button00() {
    var v = document.getElementById("p1");
    var w = document.getElementById("c1");
    var x = document.getElementById("t1");
    var z = document.getElementById("button");
    var y = document.getElementById("yourChoice");
    y.innerHTML = z.innerHTML;
    setTimeout(function () { thingy(); }, 500);
    setTimeout(function () { cpuTurn(); }, 500);
    setTimeout(function () { test4(); }, 500);
    endC();
    endP();
    endT();
}
function button11() {
    var z = document.getElementById("button1");
    var y = document.getElementById("yourChoice");
    y.innerHTML = z.innerHTML;
    setTimeout(function () { thingy(); }, 500);
    setTimeout(function () { cpuTurn(); }, 500);
    setTimeout(function () { test5(); }, 500);
}
function button22() {
    var z = document.getElementById("button2");
    var y = document.getElementById("yourChoice");
    y.innerHTML = z.innerHTML;
    setTimeout(function () { thingy(); }, 500);
    setTimeout(function () { cpuTurn(); }, 500);
    setTimeout(function () { test6(); }, 500);
}
//------------------------------------------------------------------ 
function endT() {
    var x = document.getElementById("t5");
    var y = document.getElementById("end");
    var z = document.getElementById("ft5w");
    if (x.innerHTML === "🟩") {
        z.innerHTML = "";
        y.innerHTML = "Tie! No one has won! Reload to restart.";
    }
}
function endP() {
    var x = document.getElementById("p5");
    var y = document.getElementById("end");
    var z = document.getElementById("ft5w");
    if (x.innerHTML === "🟩") {
        z.innerHTML = "";
        y.innerHTML = "Good job, you won! Reload to restart.";
    }
}
function endC() {
    var x = document.getElementById("c5");
    var y = document.getElementById("end");
    var z = document.getElementById("ft5w");
    if (x.innerHTML === "🟩") {
        z.innerHTML = "";
        y.innerHTML = "The cpu has won! Reload to restart.";
    }
}

//------------------------------------------------------------------ CPU Turn
function cpuTurn() {
    var x = document.getElementById("cpuChoice");
    if (x.innerHTML === "3") {
        x.innerHTML = "Scissors";
    } else if (x.innerHTML === "2") {
        x.innerHTML = "Paper";
    } else {
        x.innerHTML = "Rock";
    }
}
function thingy() {
    var x = document.getElementById("cpuChoice");
    if (x.innerHTML === x.innerHTML) {
        x.innerHTML = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    }
}

//------------------------------------------------------------------ 1\1\1 
function test1() {
    var v = document.getElementById("p1");
    var w = document.getElementById("c1");
    var x = document.getElementById("t1");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === y.innerHTML) {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Scissors") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Paper") {
        v.innerHTML = "🟩";
    }
}

function test2() {
    var v = document.getElementById("p1");
    var w = document.getElementById("c1");
    var x = document.getElementById("t1");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Paper") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Scissors") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Rock") {
        v.innerHTML = "🟩";
    }
}
function test3() {
    var v = document.getElementById("p1");
    var w = document.getElementById("c1");
    var x = document.getElementById("t1");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Scissors") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Rock") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Paper") {
        v.innerHTML = "🟩";
    }
}
//------------------------------------------------------------------ 2\2\2
function test4() {
    var v = document.getElementById("p2");
    var w = document.getElementById("c2");
    var x = document.getElementById("t2");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Rock") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Scissors") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Paper") {
        v.innerHTML = "🟩";
    }
}
function test5() {
    var v = document.getElementById("p2");
    var w = document.getElementById("c2");
    var x = document.getElementById("t2");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Paper") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Scissors") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Rock") {
        v.innerHTML = "🟩";
    }
}
function test6() {
    var v = document.getElementById("p2");
    var w = document.getElementById("c2");
    var x = document.getElementById("t2");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Scissors") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Rock") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Paper") {
        v.innerHTML = "🟩";
    }
}
//------------------------------------------------------------------ 3\3\3
function test7() {
    var v = document.getElementById("p3");
    var w = document.getElementById("c3");
    var x = document.getElementById("t3");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Rock") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Scissors") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Paper") {
        v.innerHTML = "🟩";
    }
}
function test8() {
    var v = document.getElementById("p3");
    var w = document.getElementById("c3");
    var x = document.getElementById("t3");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Paper") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Scissors") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Rock") {
        v.innerHTML = "🟩";
    }
}
function test9() {
    var v = document.getElementById("p3");
    var w = document.getElementById("c3");
    var x = document.getElementById("t3");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Scissors") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Rock") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Paper") {
        v.innerHTML = "🟩";
    }
}
//------------------------------------------------------------------ 4\4\4
function test10() {
    var v = document.getElementById("p4");
    var w = document.getElementById("c4");
    var x = document.getElementById("t4");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Rock") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Scissors") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Paper") {
        v.innerHTML = "🟩";
    }
}
function test11() {
    var v = document.getElementById("p4");
    var w = document.getElementById("c4");
    var x = document.getElementById("t4");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Paper") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Scissors") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Rock") {
        v.innerHTML = "🟩";
    }
}
function test12() {
    var v = document.getElementById("p4");
    var w = document.getElementById("c4");
    var x = document.getElementById("t4");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Scissors") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Rock") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Paper") {
        v.innerHTML = "🟩";
    }
}
//------------------------------------------------------------------ 5\5\5
function test14() {
    var v = document.getElementById("p5");
    var w = document.getElementById("c5");
    var x = document.getElementById("t5");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Rock") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Scissors") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Paper") {
        v.innerHTML = "🟩";
    }
}
function test15() {
    var v = document.getElementById("p5");
    var w = document.getElementById("c5");
    var x = document.getElementById("t5");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Paper") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Scissors") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Rock") {
        v.innerHTML = "🟩";
    }
}
function test16() {
    var v = document.getElementById("p5");
    var w = document.getElementById("c5");
    var x = document.getElementById("t5");
    var y = document.getElementById("yourChoice");
    var z = document.getElementById("cpuChoice");
    if (z.innerHTML === "Scissors") {
        x.innerHTML = "🟩";
    } else if (z.innerHTML === "Rock") {
        w.innerHTML = "🟩";
    } else if (z.innerHTML === "Paper") {
        v.innerHTML = "🟩";
    }
}
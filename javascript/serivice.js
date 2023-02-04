var reset = function (a) {
    for (let i = 0; i < a.length; i++) {
        a[i] = 0;
    }
};
/* 游戏排行榜 操作 ---------------------*/

var duanyoupaihangbang1 = document.getElementById("duanyoupaihangbang1");
var duanyoupaihangbang1List = duanyoupaihangbang1.getElementsByTagName("li");
for (let n = 0; n < duanyoupaihangbang1List.length; n++) {
    duanyoupaihangbang1List[n].children[1].style.display = "none";
    duanyoupaihangbang1List[n].children[2].style.display = "none";
}
duanyoupaihangbang1List[0].children[0].style.display = "none";
duanyoupaihangbang1List[0].children[1].style.display = "block";
duanyoupaihangbang1List[0].children[2].style.display = "block";
for (let i = 0; i < duanyoupaihangbang1List.length; i++) {
    duanyoupaihangbang1List[i].addEventListener("mouseover", function () {
        for (let n = 0; n < duanyoupaihangbang1List.length; n++) {
            duanyoupaihangbang1List[n].children[0].style.display = "block";
            duanyoupaihangbang1List[n].children[1].style.display = "none";
            duanyoupaihangbang1List[n].children[2].style.display = "none";
        }
        duanyoupaihangbang1List[i].children[0].style.display = "none";
        duanyoupaihangbang1List[i].children[1].style.display = "block";
        duanyoupaihangbang1List[i].children[2].style.display = "block";
    })
}
var duanyoupaihangbang2 = document.getElementById("duanyoupaihangbang2");
var duanyoupaihangbang2List = duanyoupaihangbang2.getElementsByTagName("li");
for (let n = 0; n < duanyoupaihangbang2List.length; n++) {
    duanyoupaihangbang2List[n].children[1].style.display = "none";
    duanyoupaihangbang2List[n].children[2].style.display = "none";
}
duanyoupaihangbang2List[0].children[0].style.display = "none";
duanyoupaihangbang2List[0].children[1].style.display = "block";
duanyoupaihangbang2List[0].children[2].style.display = "block";
for (let i = 0; i < duanyoupaihangbang2List.length; i++) {
    duanyoupaihangbang2List[i].addEventListener("mouseover", function () {
        for (let n = 0; n < duanyoupaihangbang2List.length; n++) {
            duanyoupaihangbang2List[n].children[0].style.display = "block";
            duanyoupaihangbang2List[n].children[1].style.display = "none";
            duanyoupaihangbang2List[n].children[2].style.display = "none";
        }
        duanyoupaihangbang2List[i].children[0].style.display = "none";
        duanyoupaihangbang2List[i].children[1].style.display = "block";
        duanyoupaihangbang2List[i].children[2].style.display = "block";
    })
}
var duanyoupaihangbang3 = document.getElementById("duanyoupaihangbang3");
var duanyoupaihangbang3List = duanyoupaihangbang3.getElementsByTagName("li");
for (let n = 0; n < duanyoupaihangbang3List.length; n++) {
    if (n == 4) {
        continue;
    }
    duanyoupaihangbang3List[n].children[1].style.display = "none";
    duanyoupaihangbang3List[n].children[2].style.display = "none";
}
duanyoupaihangbang3List[0].children[0].style.display = "none";
duanyoupaihangbang3List[0].children[1].style.display = "block";
duanyoupaihangbang3List[0].children[2].style.display = "block";
for (let i = 0; i < duanyoupaihangbang3List.length; i++) {
    if (i == 4) {
        continue;
    }
    duanyoupaihangbang3List[i].addEventListener("mouseover", function () {
        for (let n = 0; n < duanyoupaihangbang3List.length; n++) {
            if (n == 4) {
                continue;
            }
            duanyoupaihangbang3List[n].children[0].style.display = "block";
            duanyoupaihangbang3List[n].children[1].style.display = "none";
            duanyoupaihangbang3List[n].children[2].style.display = "none";
        }
        duanyoupaihangbang3List[i].children[0].style.display = "none";
        duanyoupaihangbang3List[i].children[1].style.display = "block";
        duanyoupaihangbang3List[i].children[2].style.display = "block";
    })
}
/* 游戏排行榜操作结束 */

/*  下方问题操作*/

var smallproblemList = document.getElementsByClassName("smallproblem");
for (let i = 0; i < smallproblemList.length; i++) {
    let linshismallList = smallproblemList[i].parentNode.getElementsByClassName("smallproblem");
    for (let n = 0; n < linshismallList.length; n++) {
        linshismallList[n].getElementsByClassName("smallproblembottom")[0].style.display = "none";
    }
}
for (let i = 0; i < smallproblemList.length; i++) {
    smallproblemList[i].addEventListener("click", function () {
        let linshismallList = smallproblemList[i].parentNode.getElementsByClassName("smallproblem");
        for (let n = 0; n < linshismallList.length; n++) {
            linshismallList[n].getElementsByClassName("smallproblembottom")[0].style.display = "none";
        }
        smallproblemList[i].getElementsByClassName("smallproblembottom")[0].style.display = "block";
    })
}


var changewentibtn = document.getElementsByClassName("changewentibtn")[0];
var bigproblemList = document.getElementsByClassName("bigproblem");
var probleming = [0, 0, 0, 0, 0];
for (let i = 0; i < bigproblemList.length; i++) {
    bigproblemList[i].style.display = "none";
}
bigproblemList[0].style.display = "block";
probleming[0] = 1;
changewentibtn.addEventListener("click", function () {
    for (let i = 0; i < smallproblemList.length; i++) {
        smallproblemList[i].getElementsByClassName("smallproblembottom")[0].style.display = "none";
    }
    for (let i = 0; i < probleming.length; i++) {
        if (probleming[i] == 1) {
            reset(probleming);
            if (i != 4) {
                probleming[i + 1] = 1;
                bigproblemList[i].style.display = "none";
                bigproblemList[i + 1].style.display = "block";
            }
            else {
                probleming[0] = 1;
                bigproblemList[i].style.display = "none";
                bigproblemList[0].style.display = "block";
            }
            break;
        }
    }
})
/* 问题操作结束 */
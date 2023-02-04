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



/* 周免英雄 */
/*  var freeheros = document.getElementById("freeheros").getElementsByTagName("a");
 for (let i = 0; i < freeheros.length; i++) {
     freeheros[i].style.width = "69px";
     freeheros[i].style.background = "url(images/common)/free" + i + ".jpg) no-repeat";
     freeheros[i].style.backgroundSize = "69px 69px";
 }
 var freeheros0 = [""]
 freeheros[0].style.width = "224px";
 freeheros[0].style.background = "url(images/common/free" + 0 + "" + 0 + ".png) no-repeat";
 freeheros[0].style.backgroundSize = "224px 69px";
 for (let i = 0; i < freeheros.length; i++) {
     freeheros[i].addEventListener("mouseover", function () {
         for (let n = 0; n < freeheros.length; n++) {
             freeheros[n].style.width = "69px";
             freeheros[n].style.background = "url(images/common/free" + n + ".jpg) no-repeat";
             freeheros[n].style.backgroundSize = "69px 69px";
         }
         freeheros[i].style.width = "224px";
         freeheros[i].style.background = "url(images/common/free" + i + "" + i + ".png) no-repeat";
         freeheros[i].style.backgroundSize = "224px 69px";
     })
 } */
var freeherosList = document.getElementById("freeheros").getElementsByTagName("li");
for (let i = 0; i < freeherosList.length; i++) {
    freeherosList[i].style.width = "69px";
    freeherosList[i].getElementsByTagName("a")[0].style.width = "69px";
    freeherosList[i].getElementsByTagName("img")[0].style.opacity = "1";
    freeherosList[i].getElementsByTagName("img")[1].style.opacity = "0";
}
for (let n = 0; n < freeherosList.length; n++) {
    freeherosList[n].addEventListener("mouseover", function () {
        for (let i = 0; i < freeherosList.length; i++) {
            freeherosList[i].style.width = "69px";
            freeherosList[i].getElementsByTagName("a")[0].style.width = "69px";
            freeherosList[i].getElementsByTagName("img")[0].style.opacity = "1";
            freeherosList[i].getElementsByTagName("img")[1].style.opacity = "0";
        }
        freeherosList[n].style.width = "224px";
        freeherosList[n].getElementsByTagName("a")[0].style.width = "224px";
        freeherosList[n].getElementsByTagName("img")[0].style.opacity = "0";
        freeherosList[n].getElementsByTagName("img")[1].style.opacity = "1";
    })
}
/* 周免英雄操作结束 */

/* 不同的选项远点 */
var onechooseList = document.getElementsByClassName("onechoose");
var changeboxList = document.getElementsByClassName("changebox");
for (let i = 0; i < onechooseList.length; i++) {
    onechooseList[i].getElementsByClassName("smallcircle")[0].style.backgroundColor = "rgb(239,239,239)";
}
for (let i = 0; i < changeboxList.length; i++) {
    changeboxList[i].style.display = "none";
}
onechooseList[0].getElementsByClassName("smallcircle")[0].style.backgroundColor = "#358ADD";
changeboxList[0].style.display = "block";
for (let n = 0; n < onechooseList.length; n++) {
    onechooseList[n].addEventListener("click", function () {
        for (let i = 0; i < onechooseList.length; i++) {
            onechooseList[i].getElementsByClassName("smallcircle")[0].style.backgroundColor = "rgb(239,239,239)";
        }
        for (let i = 0; i < changeboxList.length; i++) {
            changeboxList[i].style.display = "none";
        }
        onechooseList[n].getElementsByClassName("smallcircle")[0].style.backgroundColor = "#358ADD";
        changeboxList[n].style.display = "block";
    })
}
/* 不同选项操作结束 */
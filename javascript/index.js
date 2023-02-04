
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

/* var headerpaihang = document.getElementById("headerpaihang");
var headerpaihangbtn = document.getElementById("headerpaihangbtn"); */
/*  var jiadehezi = document.getElementById("jiadehezi"); */
/* headerpaihangbtn.style.zIndex = 2; */
/* var main = document.getElementById("main"); */

function sleep(time) {
    var timeStamp = new Date().getTime();
    var endTime = timeStamp + time;
    while (true) {
        if (new Date().getTime() > endTime) {
            return;
        }
    }
}
/* function headerxiaoshi() {
    headerpaihang.style.display = "none";
}
function headerhover() {
    headerpaihang.addEventListener("mouseout", headerxiaoshi);
} */
/*  headerpaihangbtn.addEventListener("mouseover", function () {
     headerpaihang.style.display = "block";
     headerpaihang.style.zIndex = 100;
 }) */
/* headerhover(); */
/* headerpaihang.addEventListener("mouseout", headerxiaoshi); */
/* headerpaihang.addEventListener("mouseout", function () {
    headerpaihang.removeEventListener("mouseout", headerxiaoshi());
}) */
/* main.addEventListener("mouseover", function () {
    headerpaihang.style.display = "none";
}) */
/* 游戏排行榜 操作结束 --------------------------------*/

/* 轮播图操作开始 */
var lunbotu = document.getElementById("lunbotu");
var lunbotuList = lunbotu.getElementsByTagName("a");
var lunbotubtn = document.getElementById("lunbotubtn");
var lunbotubtnList = lunbotubtn.getElementsByTagName("a");
var lunboing = [0, 0, 0, 0, 0];


for (let i = 0; i < lunbotuList.length; i++) {
    lunbotuList[i].style.transition = "left 0.4s";
    lunbotuList[i].style.left = "+100%";
}
lunboing[0] = 1;
lunbotuList[0].style.left = "0";
lunbotubtnList[0].style.color = "rgb(243, 194, 88)";
lunbotubtnList[0].style.backgroundColor = "rgb(38, 38, 38)";
/* lunbotuList[0].style.zIndex = "2"; */
/* 图片轮播效果 */

setInterval(function () {
    for (let i = 0; i < lunboing.length; i++) {
        if (lunboing[i] == 1) {

            for (let k = 0; k < lunbotubtnList.length; k++) {
                lunbotubtnList[k].style.color = "#b1b2be";
                lunbotubtnList[k].style.backgroundColor = "#000";
            }
            reset(lunboing);
            if (i != lunbotuList.length - 1) {
                lunboing[i + 1] = 1;
                lunbotuList[i].style.left = "-100%";
                lunbotuList[i + 1].style.left = "0";
                lunbotubtnList[i + 1].style.color = "rgb(243, 194, 88)";
                lunbotubtnList[i + 1].style.backgroundColor = "rgb(38, 38, 38)";
            }
            else {
                lunboing[0] = 1;
                lunbotuList[lunbotuList.length - 1].style.left = "+100%";
                lunbotuList[0].style.left = "0";
                lunbotubtnList[0].style.color = "rgb(243, 194, 88)";
                lunbotubtnList[0].style.backgroundColor = "rgb(38, 38, 38)";

                for (let n = 1; n < lunbotuList.length; n++) {
                    lunbotuList[n].style.left = "+100%";
                }
            }
            break;
        }
    }
}, 3000)


for (let n = 0; n < lunbotubtnList.length; n++) {
    lunbotubtnList[n].addEventListener("mouseover", function () {
        for (let i = 0; i < lunbotubtnList.length; i++) {
            lunbotubtnList[i].style.color = "#b1b2be";
            lunbotubtnList[i].style.backgroundColor = "#000";
        }
        for (let s = 0; s < n; s++) {
            lunbotuList[s].style.left = "-100%";
        }
        for (let t = n + 1; t < lunbotubtnList.length; t++) {
            lunbotuList[t].style.left = "100%";
        }
        reset(lunboing);
        lunboing[n] = 1;
        lunbotuList[n].style.left = "0px";
        lunbotubtnList[n].style.color = "rgb(243, 194, 88)";
        lunbotubtnList[n].style.backgroundColor = "rgb(38, 38, 38)";
    })
}
/* 轮播图监听结束----======----- */

/* 热门广告操作-------------------------------- */

var remenguanggaobtn = document.getElementById("remenguanggaobtn");
var remenguanggaobtnList = remenguanggaobtn.getElementsByTagName("a");
var gonggaobox = document.getElementById("gonggaobox");

gonggaobox.style.transition = "transform 1s";

for (let i = 0; i < remenguanggaobtnList.length; i++) {
    remenguanggaobtnList[i].addEventListener("mousemove", function () {
        for (let n = 0; n < remenguanggaobtnList.length; n++) {
            remenguanggaobtnList[n].style.color = "#B8B9C5";
            remenguanggaobtnList[n].style.border = "0";
        }
        remenguanggaobtnList[i].style.color = "rgb(241,192,87)";
        remenguanggaobtnList[i].style.borderBottom = "3px solid rgb(241,192,87)";
        gonggaobox.style.transform = "translate(-" + (20 * i) + "%,0px)";
    })
}
/* 热门操作完成 */



/* 内容中心左部分切换 */
var neironging = [0, 0, 0];
var neirongnav = document.getElementById("neirongnav");

/* 最大的选项 */
var neirongnavList = neirongnav.getElementsByTagName("a");
/* 大框 */
var neirongzhongxinarticleList = document.getElementsByClassName("neirongzhongxinarticle");

for (let n = 0; n < neirongzhongxinarticleList.length; n++) {
    neirongzhongxinarticleList[n].style.display = "none";
}
for (let n = 0; n < neirongnavList.length; n++) {
    neirongnavList[n].style.borderBottom = "3px solid #f5f5f5";
    neirongnavList[n].style.color = "#999"
}
neirongnavList[0].style.borderBottom = "3px solid #f3c258";
neirongnavList[0].style.color = "#333333"
neirongzhongxinarticleList[0].style.display = "block";
neironging[0] = 1;

for (let i = 0; i < neirongnavList.length; i++) {
    neirongnavList[i].addEventListener("mouseover", function () {
        for (let n = 0; n < neirongzhongxinarticleList.length; n++) {
            neirongzhongxinarticleList[n].style.display = "none";
            neironging[n] = 0;
        }
        for (let n = 0; n < neirongnavList.length; n++) {
            neirongnavList[n].style.borderBottom = "3px solid #f5f5f5";
            neirongnavList[n].style.color = "#999"
        }
        neirongnavList[i].style.borderBottom = "3px solid #f3c258";
        neirongnavList[i].style.color = "#333333"
        neirongzhongxinarticleList[i].style.display = "block";
        neironging[i] = 1;
    })
}


/* 内容中心左部分切换结束======================== */

/* 小标题切换界面开始 */

var xiaobiaoti0 = neirongzhongxinarticleList[0].getElementsByClassName("biaoti")[0].getElementsByTagName("a");
var xiaokuang0 = neirongzhongxinarticleList[0].getElementsByClassName("neirongarticlebottom");

for (let n = 0; n < xiaokuang0.length; n++) {
    xiaokuang0[n].style.display = "none";
}
for (let n = 0; n < xiaobiaoti0.length; n++) {
    xiaobiaoti0[n].style.color = "#333";
    xiaobiaoti0[n].style.backgroundColor = "#f5f5f5";
    xiaobiaoti0[n].style.border = "1px solid #e5e5e5";
}
xiaobiaoti0[0].style.color = "#fff";
xiaobiaoti0[0].style.backgroundColor = "#f3c258";
xiaobiaoti0[0].style.border = "1px solid #f3c258";
xiaokuang0[0].style.display = "block";


for (let i = 0; i < xiaobiaoti0.length; i++) {
    xiaobiaoti0[i].addEventListener("mouseover", function () {
        for (let n = 0; n < xiaokuang0.length; n++) {
            xiaokuang0[n].style.display = "none";
        }
        for (let n = 0; n < xiaobiaoti0.length; n++) {
            xiaobiaoti0[n].style.color = "#333";
            xiaobiaoti0[n].style.backgroundColor = "#f5f5f5";
            xiaobiaoti0[n].style.border = "1px solid #e5e5e5";
        }
        xiaobiaoti0[i].style.color = "#fff";
        xiaobiaoti0[i].style.backgroundColor = "#f3c258";
        xiaobiaoti0[i].style.border = "1px solid #f3c258";
        xiaokuang0[i].style.display = "block";
    })
}


var xiaobiaoti1 = neirongzhongxinarticleList[1].getElementsByClassName("biaoti")[0].getElementsByTagName("a");
var xiaokuang1 = neirongzhongxinarticleList[1].getElementsByClassName("neirongarticlebottom");

for (let n = 0; n < xiaokuang1.length; n++) {
    xiaokuang1[n].style.display = "none";
}
for (let n = 0; n < xiaobiaoti1.length; n++) {
    xiaobiaoti1[n].style.color = "#333";
    xiaobiaoti1[n].style.backgroundColor = "#f5f5f5";
    xiaobiaoti1[n].style.border = "1px solid #e5e5e5";
}
xiaobiaoti1[0].style.color = "#fff";
xiaobiaoti1[0].style.backgroundColor = "#f3c258";
xiaobiaoti1[0].style.border = "1px solid #f3c258";
xiaokuang1[0].style.display = "block";


for (let i = 0; i < xiaobiaoti1.length; i++) {
    xiaobiaoti1[i].addEventListener("mouseover", function () {
        for (let n = 0; n < xiaokuang1.length; n++) {
            xiaokuang1[n].style.display = "none";
        }
        for (let n = 0; n < xiaobiaoti1.length; n++) {
            xiaobiaoti1[n].style.color = "#333";
            xiaobiaoti1[n].style.backgroundColor = "#f5f5f5";
            xiaobiaoti1[n].style.border = "1px solid #e5e5e5";
        }
        xiaobiaoti1[i].style.color = "#fff";
        xiaobiaoti1[i].style.backgroundColor = "#f3c258";
        xiaobiaoti1[i].style.border = "1px solid #f3c258";
        xiaokuang1[i].style.display = "block";
    })
}
/* .neirongnavbiaoti .biaoti a:hover {
        border-color: #f3c258;
        background: #f3c258;
        color: #fff;
    } */
var yingxiongshuxing = document.getElementsByClassName("yingxiongshuxing");
var yingxiongshuxingList = yingxiongshuxing[0].getElementsByTagName("li");
var allherosList = document.getElementsByClassName("allheros");
for (let i = 0; i < yingxiongshuxingList.length; i++) {
    yingxiongshuxingList[i].style.backgroundColor = "rgb(245,245,245)";
    yingxiongshuxingList[i].style.color = "black";
}
for (let i = 0; i < allherosList.length; i++) {
    allherosList[i].style.display = "none";
}
yingxiongshuxingList[0].style.backgroundColor = "rgb(243,194,88)";
yingxiongshuxingList[0].style.color = "white";
allherosList[0].style.display = "block";
for (let i = 0; i < yingxiongshuxingList.length; i++) {
    yingxiongshuxingList[i].addEventListener("mouseover", function () {
        for (let i = 0; i < yingxiongshuxingList.length; i++) {
            yingxiongshuxingList[i].style.backgroundColor = "rgb(245,245,245)";
            yingxiongshuxingList[i].style.color = "black";
        }
        for (let i = 0; i < allherosList.length; i++) {
            allherosList[i].style.display = "none";
        }
        yingxiongshuxingList[i].style.backgroundColor = "rgb(243,194,88)";
        yingxiongshuxingList[i].style.color = "white";
        allherosList[i].style.display = "block";
    })
}

/* 小标题切换界面结束 */


/*  内容中心右部分 轮播图*/
var yingxiongnav = document.getElementById("yingxiongnav");
var yingxiongnavList = yingxiongnav.getElementsByTagName("a");
var yingxionglunbo = document.getElementById("yingxionglunbo");

yingxionglunbo.style.transition = "transform 1s";

for (let n = 0; n < neirongnavList.length; n++) {
    yingxiongnavList[n].style.borderBottom = "3px solid #f5f5f5";
    yingxiongnavList[n].style.color = "#999"
}
yingxiongnavList[0].style.borderBottom = "3px solid #f3c258";
yingxiongnavList[0].style.color = "#333333"

for (let i = 0; i < yingxiongnavList.length; i++) {
    yingxiongnavList[i].addEventListener("mouseover", function () {
        for (let n = 0; n < yingxiongnavList.length; n++) {
            yingxiongnavList[n].style.borderBottom = "3px solid #f5f5f5";
            yingxiongnavList[n].style.color = "#999"
        }
        yingxiongnavList[i].style.borderBottom = "3px solid #f3c258";
        yingxiongnavList[i].style.color = "#333333"
        yingxionglunbo.style.transform = "translate(-" + (33.3333333333 * i) + "%,0px)";
    })
}
/* 新英雄皮肤轮播结束 */
/* 赛事中心切换界面开始 */
var saishinav = document.getElementById("saishinav");

/* 最大的选项 */
var saishinavList = saishinav.getElementsByTagName("a");
/* 大框 */
var saishiarticleList = document.getElementsByClassName("saishiarticle");

for (let n = 0; n < saishiarticleList.length; n++) {
    saishiarticleList[n].style.display = "none";
    /* saishiarticleList[n].style.transition = "display 0.4s"; */
}
for (let n = 0; n < saishinavList.length; n++) {
    saishinavList[n].style.borderBottom = "3px solid #f5f5f5";
    saishinavList[n].style.color = "#999"
}
saishinavList[0].style.borderBottom = "3px solid #f3c258";
saishinavList[0].style.color = "#333333"
saishiarticleList[0].style.display = "block";


for (let i = 0; i < saishinavList.length; i++) {
    saishinavList[i].addEventListener("mouseover", function () {
        for (let n = 0; n < saishiarticleList.length; n++) {
            saishiarticleList[n].style.display = "none";
        }
        for (let n = 0; n < saishinavList.length; n++) {
            saishinavList[n].style.borderBottom = "3px solid #f5f5f5";
            saishinavList[n].style.color = "#999"
        }
        saishinavList[i].style.borderBottom = "3px solid #f3c258";
        saishinavList[i].style.color = "#333333"
        saishiarticleList[i].style.display = "block";
    })
}
    /* 赛事中心切换界面结束 */


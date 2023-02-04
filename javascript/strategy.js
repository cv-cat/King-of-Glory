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


/* 周免英雄 */
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
/*周免英雄结束  */




/* 轮播图操作开始 */


var zhanlvelunbo = document.getElementsByClassName("zhanlvelunbo")[0];
var zhanlvelunboList = zhanlvelunbo.getElementsByTagName("a");
var zhanlvelunbobtn = document.getElementsByClassName("zhanlvelunbobtn")[0];
var zhanlvelunbobtnList = zhanlvelunbobtn.getElementsByTagName("a");
var lunboing = [0, 0, 0, 0, 0];


for (let i = 0; i < zhanlvelunboList.length; i++) {
    zhanlvelunboList[i].style.transition = "left 0.2s linear";
    zhanlvelunboList[i].style.left = "+100%";
}
lunboing[0] = 1;
zhanlvelunboList[0].style.left = "0";
zhanlvelunbobtnList[0].style.color = "#f3c258";
zhanlvelunbobtnList[0].style.backgroundColor = "rgba(255, 255, 255,0.15)";

/* zhanlvelunboList[0].style.zIndex = "2"; */
/* 图片轮播效果 */

setInterval(function () {
    for (let i = 0; i < lunboing.length; i++) {
        if (lunboing[i] == 1) {

            for (let k = 0; k < zhanlvelunbobtnList.length; k++) {
                zhanlvelunbobtnList[k].style.color = "#b1b2be";
                zhanlvelunbobtnList[k].style.backgroundColor = "#36363d";
            }
            reset(lunboing);
            if (i != zhanlvelunboList.length - 1) {
                lunboing[i + 1] = 1;
                zhanlvelunboList[i].style.left = "-100%";
                zhanlvelunboList[i + 1].style.left = "0";
                zhanlvelunbobtnList[i + 1].style.color = "#f3c258";
                zhanlvelunbobtnList[i + 1].style.backgroundColor = "rgba(255, 255, 255,0.15)";
            }
            else {
                lunboing[0] = 1;
                zhanlvelunboList[zhanlvelunboList.length - 1].style.left = "+100%";
                zhanlvelunboList[0].style.left = "0";
                zhanlvelunbobtnList[0].style.color = "#f3c258";
                zhanlvelunbobtnList[0].style.backgroundColor = "rgba(255, 255, 255,0.15)";

                for (let n = 1; n < zhanlvelunboList.length; n++) {
                    zhanlvelunboList[n].style.left = "+100%";
                }
            }
            break;
        }
    }
}, 3000)


for (let n = 0; n < zhanlvelunbobtnList.length; n++) {
    zhanlvelunbobtnList[n].addEventListener("mouseover", function () {
        for (let i = 0; i < zhanlvelunbobtnList.length; i++) {
            zhanlvelunbobtnList[i].style.color = "#b1b2be";
            zhanlvelunbobtnList[i].style.backgroundColor = "#36363d";
        }
        for (let s = 0; s < n; s++) {
            zhanlvelunboList[s].style.left = "-100%";
        }
        for (let t = n + 1; t < zhanlvelunbobtnList.length; t++) {
            zhanlvelunboList[t].style.left = "100%";
        }
        reset(lunboing);
        lunboing[n] = 1;
        zhanlvelunboList[n].style.left = "0px";
        zhanlvelunbobtnList[n].style.color = "#f3c258";
        zhanlvelunbobtnList[n].style.backgroundColor = "rgba(255, 255, 255,0.15)";
    })
}



/* 轮播图监听结束----======----- */


/*  视频图文操作*/
var shipintuwenList = document.getElementsByClassName("xialatopleft")[0].getElementsByTagName("a");
var rizhouyue = document.getElementsByClassName("xialatopright")[0].getElementsByTagName("a");
var guanjianzichoose = document.getElementsByClassName("guanjianzichoose");
var guanjianzichoose1List = guanjianzichoose[0].getElementsByTagName("ul");
var guanjianzichoose2List = guanjianzichoose[1].getElementsByTagName("ul");
var shipingtuwening = [0, 0];
for (let i = 0; i < shipintuwenList.length; i++) {
    shipintuwenList[i].style.color = "#b1b2be";
    shipintuwenList[i].style.border = "0";
}
for (let i = 0; i < rizhouyue.length; i++) {
    rizhouyue[i].style.backgroundColor = "rgb(54,54,61)";
    rizhouyue[i].style.color = "#b1b2be";
}
for (let i = 0; i < guanjianzichoose.length; i++) {
    guanjianzichoose[i].style.display = "none";
}
for (let i = 0; i < guanjianzichoose1List.length; i++) {
    guanjianzichoose1List[i].style.display = "none";
}
for (let i = 0; i < guanjianzichoose2List.length; i++) {
    guanjianzichoose2List[i].style.display = "none";
}
shipintuwenList[0].style.color = "#f3c258";
shipintuwenList[0].style.borderBottom = "3px solid #f3c258";
rizhouyue[0].style.color = "#333";
rizhouyue[0].style.backgroundColor = "#f3c258";
guanjianzichoose[0].style.display = "block";
guanjianzichoose1List[0].style.display = "block";
guanjianzichoose2List[0].style.display = "block";
for (let n = 0; n < shipintuwenList.length; n++) {
    shipintuwenList[n].addEventListener("mouseover", function () {
        reset(shipingtuwening);
        for (let i = 0; i < guanjianzichoose.length; i++) {
            guanjianzichoose[i].style.display = "none";
        }
        for (let i = 0; i < shipintuwenList.length; i++) {
            shipintuwenList[i].style.color = "#b1b2be";
            shipintuwenList[i].style.border = "0";
        }
        shipingtuwening[n] = 1;
        guanjianzichoose[n].style.display = "block";
        shipintuwenList[n].style.color = "#f3c258";
        shipintuwenList[n].style.borderBottom = "3px solid #f3c258";
    })
}
for (let n = 0; n < rizhouyue.length; n++) {
    rizhouyue[n].addEventListener("mouseover", function () {
        if (shipingtuwening[0] == 1) {
            for (let i = 0; i < guanjianzichoose1List.length; i++) {
                guanjianzichoose1List[i].style.display = "none";
            }
            for (let i = 0; i < rizhouyue.length; i++) {
                rizhouyue[i].style.backgroundColor = "rgb(54,54,61)";
                rizhouyue[i].style.color = "#b1b2be";
            }
            rizhouyue[n].style.color = "#333";
            rizhouyue[n].style.backgroundColor = "#f3c258";
            guanjianzichoose1List[n].style.display = "block";
        }
        else {
            for (let i = 0; i < guanjianzichoose2List.length; i++) {
                guanjianzichoose2List[i].style.display = "none";
            }
            for (let i = 0; i < rizhouyue.length; i++) {
                rizhouyue[i].style.backgroundColor = "rgb(54,54,61)";
                rizhouyue[i].style.color = "#b1b2be";
            }
            rizhouyue[n].style.color = "#333";
            rizhouyue[n].style.backgroundColor = "#f3c258";
            guanjianzichoose2List[n].style.display = "block";
        }
    })
}

/* 英雄攻略部分 */
var liList2 = document.getElementsByClassName("moreherosul")[0].getElementsByTagName("li");
for (let i = 0; i < liList2.length; i++) {
    liList2[i].className = "";
    liList2[i].getElementsByTagName("p")[0].style.display = "none";
}
for (let n = 0; n < liList2.length; n++) {

    liList2[n].addEventListener("mouseover", function () {
        for (let i = 0; i < liList2.length; i++) {
            liList2[i].className = "";
            liList2[i].getElementsByTagName("p")[0].style.display = "none";
        }
        liList2[n].className = "wangzhekuang";
        liList2[n].getElementsByTagName("p")[0].style.display = "block";
    })
}

/* 选择英雄 */
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
/* 选择英雄结束 */
/*  */
/* 第一个精品中心的左边所有的xiaoli */
var liList = document.getElementsByClassName("jingpinbodyleft")[0].getElementsByTagName("a");
/* 要消失的大盒子  是个集合*/
var oneshouqidakaiList = document.getElementsByClassName("oneshouqidakai");
/* 消失的盒子中最下面的收回 是个集合*/
var shouhuiList = document.getElementsByClassName("shouhui");
/* 展开更多 是个集合 */
var moremoreList = document.getElementsByClassName("moremore");
/* 精品右侧大盒子 */
var rightList = document.getElementsByClassName("jingpinbodyright");

var jingpinlanmu = document.getElementById("jingpinlanmu");
for (let i = 0; i < liList.length; i++) {
    liList[i].style.color = "#333";
    liList[i].style.backgroundColor = "rgb(245,245,245)";
    liList[i].style.fontWeight = "400";
}
liList[0].style.color = "white";
liList[0].style.backgroundColor = "#f3c258";
liList[0].style.fontWeight = "700";
for (let i = 0; i < oneshouqidakaiList.length; i++) {
    oneshouqidakaiList[i].style.display = "none";
}

for (let i = 0; i < rightList.length; i++) {
    rightList[i].style.display = "none";
}
rightList[0].style.display = "block";

/* 所有的更多出现 1*/
/*=========================================  */
for (let n = 0; n < liList.length; n++) {
    liList[n].addEventListener("mouseover", function () {
        for (let i = 0; i < liList.length; i++) {
            liList[i].style.color = "#333";
            liList[i].style.backgroundColor = "rgb(245,245,245)";
            liList[i].style.fontWeight = "400";
        }
        for (let i = 0; i < rightList.length; i++) {
            rightList[i].style.display = "none";
        }
        liList[n].style.color = "white";
        liList[n].style.backgroundColor = "#f3c258";
        liList[n].style.fontWeight = "700";
        rightList[n].style.display = "block";
    })
}
for (let i = 0; i < shouhuiList.length; i++) {
    shouhuiList[i].addEventListener("click", function () {
        shouhuiList[i].style.display = "none";
        oneshouqidakaiList[i].style.display = "none";
        moremoreList[i].style.display = "block";
        jingpinlanmu.style.marginBottom = "40px";
    })
}
for (let i = 0; i < moremoreList.length; i++) {
    moremoreList[i].addEventListener("click", function () {
        moremoreList[i].style.display = "none";
        oneshouqidakaiList[i].style.display = "block";
        shouhuiList[i].style.display = "block";
        jingpinlanmu.style.marginBottom = "240px"
    })
}

/* 2 */
/*  */
/* 第一个精品中心的左边所有的xiaoli */
var liList1 = document.getElementsByClassName("jingpinbodyleft")[1].getElementsByTagName("a");
/* 要消失的大盒子  是个集合*/
var oneshouqidakai1List = document.getElementsByClassName("oneshouqidakai1");
/* 消失的盒子中最下面的收回 是个集合*/
var shouhui1List = document.getElementsByClassName("shouhui1");
/* 展开更多 是个集合 */
var moremore1List = document.getElementsByClassName("moremore1");
/* 精品右侧大盒子 */
var rightList1 = document.getElementsByClassName("jingpinbodyright1");

var saishijingpin = document.getElementById("saishijingpin");
for (let i = 0; i < liList1.length; i++) {
    liList1[i].style.color = "#333";
    liList1[i].style.backgroundColor = "rgb(245,245,245)";
    liList1[i].style.fontWeight = "400";
}
liList1[0].style.color = "white";
liList1[0].style.backgroundColor = "#f3c258";
liList1[0].style.fontWeight = "700";
for (let i = 0; i < oneshouqidakai1List.length; i++) {
    oneshouqidakai1List[i].style.display = "none";
}

for (let i = 0; i < rightList1.length; i++) {
    rightList1[i].style.display = "none";
}
rightList1[0].style.display = "block";

/* 所有的更多出现 1*/
/*=========================================  */
for (let n = 0; n < liList1.length; n++) {
    liList1[n].addEventListener("mouseover", function () {
        for (let i = 0; i < liList1.length; i++) {
            liList1[i].style.color = "#333";
            liList1[i].style.backgroundColor = "rgb(245,245,245)";
            liList1[i].style.fontWeight = "400";
        }
        for (let i = 0; i < rightList1.length; i++) {
            rightList1[i].style.display = "none";
        }
        liList1[n].style.color = "white";
        liList1[n].style.backgroundColor = "#f3c258";
        liList1[n].style.fontWeight = "700";
        rightList1[n].style.display = "block";
    })
}
for (let i = 0; i < shouhui1List.length; i++) {
    shouhui1List[i].addEventListener("click", function () {
        shouhui1List[i].style.display = "none";
        oneshouqidakai1List[i].style.display = "none";
        moremore1List[i].style.display = "block";
        saishijingpin.style.marginBottom = "40px";
    })
}
for (let i = 0; i < moremore1List.length; i++) {
    moremore1List[i].addEventListener("click", function () {
        moremore1List[i].style.display = "none";
        oneshouqidakai1List[i].style.display = "block";
        shouhui1List[i].style.display = "block";
        saishijingpin.style.marginBottom = "240px";
    })
}
/* 更多出现结束 */
/* 图文攻略开始 */
var tuwengonglveList = document.getElementsByClassName("tuwengonglvenav")[0].getElementsByTagName("li");
var tuwenbottomList = document.getElementsByClassName("tuwengonglvebottom");
for (let i = 0; i < tuwengonglveList.length; i++) {
    tuwengonglveList[i].style.borderBottom = "3px solid rgb(245,245,245)";
    tuwengonglveList[i].getElementsByTagName("a")[0].style.color = "#999";
}
tuwengonglveList[0].style.borderBottom = "3px solid #f3c258";
tuwengonglveList[0].getElementsByTagName("a")[0].style.color = "#333";
for (let i = 0; i < tuwenbottomList.length; i++) {
    tuwenbottomList[i].style.display = "none";
}
tuwenbottomList[0].style.display = "block";
for (let n = 0; n < tuwengonglveList.length; n++) {
    tuwengonglveList[n].addEventListener("mouseover", function () {
        for (let i = 0; i < tuwengonglveList.length; i++) {
            tuwengonglveList[i].style.borderBottom = "3px solid rgb(245,245,245)";
            tuwengonglveList[i].getElementsByTagName("a")[0].style.color = "#999";
        }
        for (let i = 0; i < tuwenbottomList.length; i++) {
            tuwenbottomList[i].style.display = "none";
        }
        tuwengonglveList[n].style.borderBottom = "3px solid #f3c258";
        tuwengonglveList[n].getElementsByTagName("a")[0].style.color = "#333";
        tuwenbottomList[n].style.display = "block";
    })
}
/* 图文攻略结束 */
/* 技能切换 */
var jinengbiaoList = document.getElementsByClassName("jinengbiao")[0].getElementsByTagName("li");
var jinengboxList = document.getElementsByClassName("jinengbox");
for (let i = 0; i < jinengboxList.length; i++) {
    jinengboxList[i].style.display = "none";
}
jinengboxList[0].style.display = "block";
for (let i = 0; i < jinengbiaoList.length; i++) {
    jinengbiaoList[i].getElementsByTagName("img")[0].style.borderColor = "#fff";
}
jinengbiaoList[0].getElementsByTagName("img")[0].style.borderColor = "#f3c258";

for (let n = 0; n < jinengbiaoList.length; n++) {
    jinengbiaoList[n].addEventListener("click", function () {
        for (let i = 0; i < jinengboxList.length; i++) {
            jinengboxList[i].style.display = "none";
        }
        for (let i = 0; i < jinengbiaoList.length; i++) {
            jinengbiaoList[i].getElementsByTagName("img")[0].style.borderColor = "#fff";
        }
        jinengboxList[n].style.display = "block";
        jinengbiaoList[n].getElementsByTagName("img")[0].style.borderColor = "#f3c258";
    })
}
/* 技能切换结束 */

/* 大盒子切换 开始 */
var jinenggonglvenavList = document.getElementsByClassName("jinenggonglvenav")[0].getElementsByTagName("li");
var jinenggonglvearticleList = document.getElementsByClassName("jinenggonglvearticle");
for (let i = 0; i < jinenggonglvenavList.length; i++) {
    jinenggonglvenavList[i].style.borderBottom = "3px solid rgb(245,245,245)";
    jinenggonglvenavList[i].getElementsByTagName("a")[0].style.color = "#999";
}
jinenggonglvenavList[0].style.borderBottom = "3px solid #f3c258";
jinenggonglvenavList[0].getElementsByTagName("a")[0].style.color = "#333";
for (let i = 0; i < jinenggonglvearticleList.length; i++) {
    jinenggonglvearticleList[i].style.display = "none";
}
jinenggonglvearticleList[0].style.display = "block";
for (let n = 0; n < jinenggonglvenavList.length; n++) {
    jinenggonglvenavList[n].addEventListener("mouseover", function () {
        for (let i = 0; i < jinenggonglvenavList.length; i++) {
            jinenggonglvenavList[i].style.borderBottom = "3px solid rgb(245,245,245)";
            jinenggonglvenavList[i].getElementsByTagName("a")[0].style.color = "#999";
        }
        for (let i = 0; i < jinenggonglvearticleList.length; i++) {
            jinenggonglvearticleList[i].style.display = "none";
        }
        jinenggonglvenavList[n].style.borderBottom = "3px solid #f3c258";
        jinenggonglvenavList[n].getElementsByTagName("a")[0].style.color = "#333";
        jinenggonglvearticleList[n].style.display = "block";
    })
}
/* 大盒子切换结束 */
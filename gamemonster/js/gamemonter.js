var headerCanvas = document.getElementById("headerCanvas");
var bodyCanvas = document.getElementById("bodyCanvas");

var headerCtx = headerCanvas.getContext("2d");
var bodyCtx = bodyCanvas.getContext("2d");

var lastUpdateTime = Date.now();

var FPS = 144;
var TICKS = 1000 / FPS;

var scoreNumber = 0;
var heartNumber = 5;
var speedNumber = 2;
var monsterNumber = 1;
var boomNumber = 3;
var stopNumber = 3;

// var myArray = [0, 210, 420];
// var rand1 = myArray[Math.floor(Math.random() * myArray.length)];
// var rand2 = myArray[Math.floor(Math.random() * myArray.length)];
// var rand3 = rand1;
// var rand4 = rand2;

//===================>Start create img<===================//
var heartImage = new Image();
heartImage.src = "img/heart.png";

var boomImage = new Image();
boomImage.src = "img/boom.gif";

var pauseImage = new Image();
pauseImage.src = "img/pause.png";

var restartImage = new Image();
restartImage.src = "img/restart.png";

var bloodImage = new Image();
bloodImage.src = "img/blood.png";

var stopImage = new Image();
stopImage.src = "img/stop.png";

var monsterImage = new Image();
monsterImage.src = "img/monster.gif";
monsterImageSize = {
    width: 80,
    height: 80
};

var bgImage = new Image();
bgImage.src = "img/background.jpg";
//===================>End create img<===================//
function Monster(beginX, beginY, endX, endY, startX, startY, stopX, stopY, speed, show, click, dieX, dieY) {
    this.beginX = beginX;
    this.beginY = beginY;
    this.endX = endX;
    this.endY = endY;
    this.startX = startX;
    this.startY = startY;
    this.stopX = stopX;
    this.stopY = stopY;
    this.speed = speed;
    this.show = show;
    this.click = click;
    this.dieX = dieX;
    this.dieY = dieY;
}
var Monster1 = new Monster(0, 0, 210, 210, 0, 0, 210, 210, speedNumber, true, false, 0, 0);
var Monster2 = new Monster(210, 0, 210, 210, 210, 0, 210, 210, speedNumber, false, false, 0, 0);
var Monster3 = new Monster(420, 0, 210, 210, 420, 0, 210, 210, speedNumber, false, false, 0, 0);
var Monster4 = new Monster(420, 210, 210, 210, 420, 210, 210, 210, speedNumber, false, false, 0, 0);
var Monster5 = new Monster(420, 420, 210, 210, 420, 420, 210, 210, speedNumber, false, false, 0, 0);
var Monster6 = new Monster(210, 420, 210, 210, 210, 420, 210, 210, speedNumber, false, false, 0, 0);
var Monster7 = new Monster(0, 420, 210, 210, 0, 420, 210, 210, speedNumber, false, false, 0, 0);
var Monster8 = new Monster(0, 210, 210, 210, 0, 210, 210, 210, speedNumber, false, false, 0, 0);
// if (rand1 === 210 && rand2 === 210) {
//     var Monster9 = new Monster(0, 0, 210, 210, 0, 0, 210, 210, speedNumber, false, false, 0, 0);
//     console.log("else 9");
// }
// else {
//     Monster9 = new Monster(rand3, rand4, 210, 210, rand3, rand4, 210, 210, speedNumber, false, false, 0, 0);
//     console.log("else 9");
// }


//===================>Start load screen game<===================//
function loadScreen() {
    headerCtx.clearRect(0, 0, headerCanvas.width, headerCanvas.height);
    headerCtx.fillStyle = "#19B80A";
    headerCtx.font = "20px Arial";
    headerCtx.fillText("Score: " + scoreNumber, 10, 30);
    headerCtx.fillText("Heart: ", 10, 60);
    var Xposition = 0;
    for (var i = 0; i < heartNumber; i++) {
        headerCtx.drawImage(heartImage, (70 + Xposition), 45, 20, 20);
        Xposition += 20;
    }
    headerCtx.fillText("Speed: " + speedNumber, 10, 90);
    headerCtx.fillText("Random Monster: " + monsterNumber, 300, 30);
    headerCtx.drawImage(boomImage, 290, 60, 50, 40);
    headerCtx.drawImage(stopImage, 350, 60, 40, 40);
    headerCtx.drawImage(pauseImage, 400, 60, 40, 40);
    headerCtx.drawImage(restartImage, 450, 60, 40, 40);
    headerCtx.fillStyle = "#FFFFFF";
    headerCtx.font = "35px Arial";
    headerCtx.fillText(boomNumber, 300, 75);
    headerCtx.fillText(stopNumber, 360, 75);

    bodyCtx.clearRect(0, 0, bodyCanvas.width, bodyCanvas.height);
    bodyCtx.drawImage(bgImage, 0, 0, bodyCanvas.width, bodyCanvas.height);

    if (Monster1.show)
        bodyCtx.drawImage(monsterImage, Monster1.startX, Monster1.startY, monsterImageSize.width, monsterImageSize.height);
    if (Monster2.show)
        bodyCtx.drawImage(monsterImage, Monster2.startX, Monster2.startY, monsterImageSize.width, monsterImageSize.height);
    if (Monster3.show)
        bodyCtx.drawImage(monsterImage, Monster3.startX, Monster3.startY, monsterImageSize.width, monsterImageSize.height);
    if (Monster4.show)
        bodyCtx.drawImage(monsterImage, Monster4.startX, Monster4.startY, monsterImageSize.width, monsterImageSize.height);
    if (Monster5.show)
        bodyCtx.drawImage(monsterImage, Monster5.startX, Monster5.startY, monsterImageSize.width, monsterImageSize.height);
    if (Monster6.show)
        bodyCtx.drawImage(monsterImage, Monster6.startX, Monster6.startY, monsterImageSize.width, monsterImageSize.height);
    if (Monster7.show)
        bodyCtx.drawImage(monsterImage, Monster7.startX, Monster7.startY, monsterImageSize.width, monsterImageSize.height);
    if (Monster8.show)
        bodyCtx.drawImage(monsterImage, Monster8.startX, Monster8.startY, monsterImageSize.width, monsterImageSize.height);
    // if (Monster9.show)
    //     bodyCtx.drawImage(monsterImage, Monster9.startX, Monster9.startY, monsterImageSize.width, monsterImageSize.height);

}
//===================>End load screen game<===================//

function refreshMonster(monster) {
    monster.show = false;
    monster.startX = monster.beginX;
    monster.startY = monster.beginY;
    monster.stopX = monster.endX;
    monster.stopY = monster.endY;
    monster.speed = speedNumber;
}

function randomMonster() {
    if (!Monster1.show)
        refreshMonster(Monster1);
    if (!Monster2.show)
        refreshMonster(Monster2);
    if (!Monster3.show)
        refreshMonster(Monster3);
    if (!Monster4.show)
        refreshMonster(Monster4);
    if (!Monster5.show)
        refreshMonster(Monster5);
    if (!Monster6.show)
        refreshMonster(Monster6);
    if (!Monster7.show)
        refreshMonster(Monster7);
    if (!Monster8.show)
        refreshMonster(Monster8);
    // if (!Monster9.show)
    //     refreshMonster(Monster8);
    var value = Math.floor((Math.random() * 8) + 1);
    console.log(value);
    switch (value) {
        case 1:
            if (!Monster1.show)
                Monster1.show = true;
            break;
        case 2:
            if (!Monster2.show)
                Monster2.show = true;
            break;
        case 3:
            if (!Monster3.show)
                Monster3.show = true;
            break;
        case 4:
            if (!Monster4.show)
                Monster4.show = true;
            break;
        case 5:
            if (!Monster5.show)
                Monster5.show = true;
            break;
        case 6:
            if (!Monster6.show)
                Monster6.show = true;
            break;
        case 7:
            if (!Monster7.show)
                Monster7.show = true;
            break;
        case 8:
            if (!Monster8.show)
                Monster8.show = true;
            break;
        // case 9:
        //     if (!Monster9.show)
        //         Monster9.show = true;
        //     break;
    }
}

function updateMonster(monster) {

    // monster.click = true;
    if (monster.startX === monster.stopX && monster.startY === monster.stopY) {
        monster.startX = monster.stopX;
        monster.startY = monster.stopY;
        monster.stopX = monster.beginX;
        monster.stopY = monster.beginY;
    } else {
        if (monster.startX < monster.stopX) {
            monster.startX += monster.speed;
        }
        else {
            monster.startX -= monster.speed;

        }
        if (monster.startY < monster.stopY) {
            monster.startY += monster.speed;
        }
        else {
            monster.startY -= monster.speed;
        }
    }
    if (monster.startX === monster.beginX && monster.startY === monster.beginY) {
        monster.show = false;
        randomMonster();
    }
}
function main() {
    var NOW = Date.now();
    var differentTime = NOW - lastUpdateTime;
    if (differentTime >= TICKS) {
        loadScreen();
        if (Monster1.show)
            updateMonster(Monster1);
        if (Monster2.show)
            updateMonster(Monster2);
        if (Monster3.show)
            updateMonster(Monster3);
        if (Monster4.show)
            updateMonster(Monster4);
        if (Monster5.show)
            updateMonster(Monster5);
        if (Monster6.show)
            updateMonster(Monster6);
        if (Monster7.show)
            updateMonster(Monster7);
        if (Monster8.show)
            updateMonster(Monster8);
        // if (Monster9.show)
        //     updateMonster(Monster9);
    }
    requestAnimationFrame(main);
}
var windows = window;
requestAnimationFrame = windows.requestAnimationFrame || windows.webkitRequestAnimationFrame || windows.msRequestAnimationFrame || windows.mozRequestAnimationFrame;
main();
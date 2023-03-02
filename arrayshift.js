let listOne = ["I'm data", "I'm also data", "I want to be data!", "Me too!", "I don't want to be data", "Data is lame!"];
let listTwo = [];

const button1 = document.querySelector("#push");
const button2 = document.querySelector("#pushBack");
let first = document.querySelector("#firstList");
let second = document.querySelector("#secondList");

document.getElementById("firstList").innerHTML = listOne;
document.getElementById("secondList").innerHTML = listTwo;


button1.onclick = pushIt;
button2.onclick = pushItBack;

function pushIt() {
    if (listOne.length > 0) {
        listTwo.push(listOne[0]);
        document.getElementById("secondList").innerHTML = listTwo;
        listOne.shift([0]);
        document.getElementById("firstList").innerHTML = listOne;

    } else { document.getElementById("firstList").innerHTML = "No more data :(" }
};

function pushItBack() {
    if (listTwo.length > 0) {
        listOne.push(listTwo[0]);
        document.getElementById("firstList").innerHTML = listOne;
        listTwo.shift([0]);
        document.getElementById("secondList").innerHTML = listTwo;
    } else { document.getElementById("secondList").innerHTML = "No more data :(" }
};

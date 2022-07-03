var socket = io();

side = 50;

grassArr = [];
grassEaterArr=[];
PredatorArr=[];
Energya = [];
MardakerArr =[];
KamikadzeArr =[];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

weather = "summer"

socket.on("send weather", function (data) {
    weather = data
})
function nkarel(matrix) {
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 0) {
            fill("#acacac");
            rect(x * side, y * side, side, side);
        }
          else if (matrix[y][x] == 1) {
            if (weather == "summer") {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (weather == "autumn") {
                fill("#96652d");
                rect(x * side, y * side, side, side);
            }
            else if (weather == "winter") {
                fill("#f2f0eb");
                rect(x * side, y * side, side, side);
            }
            else if (weather == "spring") {
                fill("#36a816");
                rect(x * side, y * side, side, side);
            }
        }
       else if (matrix[y][x] == 1) {
            fill("green");
        }
        else if (matrix[y][x] == 0) {
            fill("#acacac");
        }
        else if (matrix[y][x] == 2) {
            fill("yellow");
        }
        else if (matrix[y][x] == 3) {
            fill("red");
        }
        else if (matrix[y][x] == 4) {
            fill("#edb009");
        }  else if (matrix[y][x] == 5) {
            fill("#ed09b4");
        } else if (matrix[y][x] == 6) {
            fill("#ed09b5");
        }
    

        rect(x * side, y * side, side, side);
    }
}
}
setInterval(
    function () {
    socket.on('send matrix', setup.nkarel)
    },1000
)

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

function generate(matLen, gr, grEat, Pr, Md, En, Km) {
    let matrix = []
    for (let i = 0; i < matLen; i++) {
        matrix[i] = []
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < Pr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < Md; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
        for (let i = 0; i < En; i++) {
            let x = Math.floor(Math.random() * matLen)
            let y = Math.floor(Math.random() * matLen)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 5
            }
    }
    for (let i = 0; i < Km; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
        }
}
    return matrix
}

 matrix = generate(50, 100, 8, 3,5,7,6)


io.sockets.emit('send matrix', matrix)


 grassArr = []
 grassEaterArr = []
 predatorArr = []
 mardakerArr = []
 EnergyaArr = []
 KamikadzeArr = []


//  io.sockets.emit('send arrays', arrays)

Grass = require("./Grass")
GrassEater = require("./GrassEater")
Mardaker = require("/Mardaker")
Predator = require("./Predator")
Kamikadze = require("./Kamikadze")

function createObject(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let Pr = new Predator(x, y)
                predatorArr.push(Pr)
            } else if (matrix[y][x] == 4) {
                let Md = new Mardaker(x, y)
                mardakerArr.push(Md)
            }else if (matrix[y][x] == 5) {
                let En = new Energya(x, y)
                EnergyaArr.push(En)
            } else if (matrix[y][x] == 6) {
                let Km = new Kamikadze(x, y)
                KamikadzeaArr.push(x,y)
            }
        }
    }
}


io.sockets.emit('send matrix', matrix)

function game() {
    for (var i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()

    }
    for (let i in mardakerArr) {
        mardakerArr[i].mul()
        mardakerArr[i].eat()
    }
    for (let i in kamikadzeArr) {
        kamikadzerArr[i].mul()
        kamikadzerArr[i].eat()
    }
    io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1000)

io.on('connection', function (socket) {
    createObject(matrix)
})
    
var statistics = {};

setInterval(function () {
    statistics.Grass = grassArr.length
    statistics.GrassEater = grassEaterArr.length
    statistics.Predator = PredatorArr.length
    statistics.GrassSpawn = grassSpawnArr.length
    statistics.EaterSpawn = EaterSpawnArr.length
    statistics.Kamikadze = KamikadzeArr.length

    fs.writeFileSync("statistics.json",
        JSON.stringify(statistics))
}, 1000)

 weather = "summer"

setInterval(function () {

    if (weather == "summer") {
        weather = "autumn"
    }
    else if (weather == "autumn") {
        weather = "winter"
    }
    else if (weather == "winter") {
        weather = "spring"
    }
    else if (weather == "spring") {
        weather = "summer"
    }
    io.sockets.emit("send weather", weather)
},4000)

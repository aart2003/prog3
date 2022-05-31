function generate(matLen, gr, grEat, Pr, Md, En) {
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
        for (let i = 0; i < En; i++) {
            let x = Math.floor(Math.random() * matLen)
            let y = Math.floor(Math.random() * matLen)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 5
            }
    }
    return matrix
}
}

let matrix = generate(50, 100, 8, 3,5,7)


var side = 15;
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let mardakerArr = []
let EnergyaArr = []


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

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
            }
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
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
            }

            rect(x * side, y * side, side, side);


        }
    }


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
}

module.exports = class Kamikadze {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character1,character2,character3) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character1||matrix[y][x] == character2||matrix[y][x] == character3) {
                    found.push(this.directions[i]);
                }

            }
        }
        return found;
    }
    
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.energy > 15) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;

            var newkamikadze = new Kamikadze(newX, newY);
            kamikadzeArr.push(newkamikadze);
            this.energy = 8
        }
    }
    move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }
    eat() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        var emptyCells1 = this.chooseCell(2);
        var newCell1 = random(emptyCells1);
        var emptyCells2 = this.chooseCell(3);
        var newCell2 = random(emptyCells2);
        var emptyCells3 = this.chooseCell(4);
        var newCell3 = random(emptyCells3);

        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        } else if (newCell1) {
            this.eatGrassEater()
        } else if (newCell2) {
            this.eatPredator()
        } else if (newCell3) {
            this.eatMardaker()
        } else {
            this.move()
        }
    }
    eatGrassEater() {
        var emptyCells = this.chooseCell(2);
        var newCell = random(emptyCells);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

        }
    }
    eatPredator() {
        var emptyCells = this.chooseCell(3);
        var newCell = random(emptyCells);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }

        }
    }

    eatMardaker() {
        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in MardakerArr) {
                if (newX == MardakerArr[i].x && newY == MardakerArr[i].y) {
                    MardakerArr.splice(i, 1);
                    break;
                }
            }

        }
    }
























}


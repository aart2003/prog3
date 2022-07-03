const LivingCreature = require('./LivingCreature');

module.exports = class Grass extends LivingCreature{
    constructor(x, y) {
        super(x, y);
        this.multiply = 0; 
    }
    mul() {
        this.multiply++;
        if (this.multiply >= 5) {
            let emptyCells = super.chooseCell(0)
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
            if (this.multiply >= 5 && newCell) {
                let x = newCell[0]
                let y = newCell[1]
                matrix[newY][newX] = 1

                var gr = new Grass(NewX, NewY, 1)
                grassArr.push(newGrass)
                this.multiply = 0;
            }
        }
    }
}




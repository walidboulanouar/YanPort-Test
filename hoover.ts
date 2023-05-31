export class Hoover {
    x: number;
    y: number;
    orientation: string;
    gridX: number;
    gridY: number;

    constructor(x: number, y: number, orientation: string, gridX: number, gridY: number) {
        this.x = x;
        this.y = y;
        this.orientation = orientation;
        this.gridX = gridX;
        this.gridY = gridY;
    }

    turnRight() {
        const directions = ['N', 'E', 'S', 'W'];
        const index = (directions.indexOf(this.orientation) + 1) % 4;
        this.orientation = directions[index];
    }

    turnLeft() {
        const directions = ['N', 'E', 'S', 'W'];
        const index = (directions.indexOf(this.orientation) + 3) % 4;
        this.orientation = directions[index];
    }

    moveForward() {
        if (this.orientation === 'N' && this.y < this.gridY) {
            this.y++;
        } else if (this.orientation === 'E' && this.x < this.gridX) {
            this.x++;
        } else if (this.orientation === 'S' && this.y > 0) {
            this.y--;
        } else if (this.orientation === 'W' && this.x > 0) {
            this.x--;
        }
    }

    executeInstructions(instructions: string) {
        for (let instruction of instructions) {
            if (instruction === 'D') {
                this.turnRight();
            } else if (instruction === 'G') {
                this.turnLeft();
            } else if (instruction === 'A') {
                this.moveForward();
            }
        }
    }

    getPosition() {
        return {x: this.x, y: this.y, orientation: this.orientation};
    }
}

// Test
const hoover = new Hoover(5, 5, 'N', 10, 10);
hoover.executeInstructions('DADADADAA');
console.log(hoover.getPosition());  // Output: { x: 5, y: 6, orientation: 'N' }

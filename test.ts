import { Hoover } from "./hoover";

// Change these parameters as needed
const initialX = 5;
const initialY = 5;
const initialOrientation = 'N';
const gridX = 10;
const gridY = 10;
const instructions = 'DADADADAA';

// Create and run the hoover
const hoover = new Hoover(initialX, initialY, initialOrientation, gridX, gridY);
hoover.executeInstructions(instructions);
console.log(hoover.getPosition());

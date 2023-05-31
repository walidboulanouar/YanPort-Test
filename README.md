

# yanport test Project

This project simulates a hoover moving around a grid.

## Setup

1. Install Node.js and npm (Node Package Manager) if you haven't already. You can download them from https://nodejs.org/.

2. Install the project dependencies:

    ```bash
    npm install
    ```

## Running the Code

You can run the code with the following command:

```bash
npx ts-node test.ts
```

This will print the final position of the hoover to the console.

## Modifying the Test

You can modify the `test.ts` file to change the initial position, grid size, or instructions for the hoover. Just change the variables at the top of the file, and then run the `npx ts-node test.ts` command again to see the new result.

## File Structure

- `hoover.ts`: Contains the `Hoover` class definition.
- `test.ts`: File to modify the test parameters and run the hoover simulation.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: Project configuration file.


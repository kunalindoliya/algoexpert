/**
 * @read: https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/snake-and-ladder.md#requirements
 */
import GameManager from "./game-manager";

function main() {
    const gameManager = new GameManager();
    gameManager.startNewGame(["Player 1", "Player 2", "Player 3"]);
}

main();
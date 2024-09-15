/**
 * The GameManager class is a singleton that manages multiple game sessions.
 * It maintains a list of active games and provides a method to start a new game with a list of player names.
 * Each game is started in a separate thread to allow concurrent game sessions.
 */
import SnakeAndLadderGame from "./snake-and-ladder-game";

export default class GameManager {
    private static instance: GameManager;
    private readonly games: SnakeAndLadderGame[];

    constructor() {
        this.games = [];
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new GameManager();
        }
        return this.instance;
    }

    startNewGame(playerNames: string[]) {
        const game = new SnakeAndLadderGame(playerNames);
        this.games.push(game);
        // Simulate starting the game in a new thread using asynchronous operations
        //game.play()
        setInterval(() => game.play(), 0);
    }
}
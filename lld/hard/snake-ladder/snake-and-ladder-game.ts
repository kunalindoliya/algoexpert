/**
 * The SnakeAndLadderGame class represents a single game session.
 * It initializes the game with a board, a list of players, and a dice.
 * The play method handles the game loop, where players take turns rolling the dice and moving their positions on the board.
 * It checks for snakes and ladders and updates the player's position accordingly. The game continues until a player reaches the final position on the board.
 */
import Board from "./board";
import Player from "./player";
import Dice from "./dice";

export default class SnakeAndLadderGame {
    private readonly board: Board;
    private readonly players: Player[];
    private readonly dice: Dice;
    private currentPlayerIndex: number;

    constructor(playerNames: string[]) {
        this.board = new Board();
        this.dice = new Dice();
        this.players = [];
        for (const name of playerNames) {
            this.players.push(new Player(name))
        }
        this.currentPlayerIndex = 0;
    }

    play() {
        while (!this.isGameOver()) {
            const currentPlayer = this.players[this.currentPlayerIndex];
            const diceRoll = this.dice.roll();
            const newPosition = currentPlayer.position + diceRoll;

            if (newPosition <= Board.getBoardSize()) {
                currentPlayer.position = this.board.getNewPositionAfterSnakeOrLadder(newPosition);
                console.log(currentPlayer.name + " rolled a " + diceRoll +
                    " and moved to position " + currentPlayer.position)
            }

            if (currentPlayer.position === Board.getBoardSize()) {
                console.log(currentPlayer.name + " wins!")
                break;
            }

            this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
        }
    }

    isGameOver(): boolean {
        for (const player of this.players) {
            if (player.position === Board.getBoardSize()) {
                return true;
            }
        }
        return false;
    }
}
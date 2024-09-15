/**
 * The Board class represents the game board with a fixed size (e.g., 100 cells).
 * It contains the positions of snakes and ladders and provides methods to initialize them and retrieve
 * the new position after encountering a snake or ladder.
 */
import Snake from "./snake";
import Ladder from "./ladder";


export default class Board {
    private static readonly SIZE = 100;
    private readonly snakes: Snake[];
    private readonly ladders: Ladder[];

    constructor() {
        this.snakes = [];
        this.ladders = []
        this.initializeSnakesAndLadders();
    }

    initializeSnakesAndLadders() {
        // Initialize snakes
        this.snakes.push(new Snake(16, 6));
        this.snakes.push(new Snake(48, 26));
        this.snakes.push(new Snake(64, 60));
        this.snakes.push(new Snake(93, 73));

        // Initialize ladders
        this.ladders.push(new Ladder(1, 38));
        this.ladders.push(new Ladder(4, 14));
        this.ladders.push(new Ladder(9, 31));
        this.ladders.push(new Ladder(21, 42));
        this.ladders.push(new Ladder(28, 84));
        this.ladders.push(new Ladder(51, 67));
        this.ladders.push(new Ladder(80, 99));
    }

    static getBoardSize() {
        return this.SIZE;
    }

    getNewPositionAfterSnakeOrLadder(position: number) {
        for (let snake of this.snakes) {
            if (snake.start === position) {
                return snake.end;
            }
        }

        for (let ladder of this.ladders) {
            if (ladder.start === position) {
                return ladder.end;
            }
        }

        return position;
    }
}
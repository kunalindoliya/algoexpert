/**
 * The Dice class represents a dice used in the game, with a method to roll the dice and return a random value between 1 and 6.
 */

export default class Dice {
    private static readonly MIN_VALUE: number = 1;
    private static readonly MAX_VALUE: number = 6;

    roll(): number {
        return Math.floor(Math.random() * Dice.MAX_VALUE) + Dice.MIN_VALUE;
    }
}
/**
 * coin class to handle values of coins
 */

export default class Coin {

    static PENNY = new Coin(0.01);
    static NICKEL = new Coin(0.05);
    static DIME = new Coin(0.1);
    static QUARTER = new Coin(0.25);

    constructor(private readonly value: number) {
    }

    getValue(): number {
        return this.value;
    }
}
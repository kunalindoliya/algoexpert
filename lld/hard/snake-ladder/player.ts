/**
 * The Player class represents a player in the game, with properties such as name and current position on the board.
 */

export default class Player {
    private readonly _name: string;
    private _position: number;

    constructor(name: string) {
        this._name = name;
        this._position = 0;
    }

    get name(): string {
        return this._name;
    }

    get position(): number {
        return this._position;
    }

    set position(value: number) {
        this._position = value;
    }
}
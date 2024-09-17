/**
 * The Seat class represents a seat in a show, with properties such as ID, row, column, type, price, and status.
 * The SeatType enum defines the different types of seats (normal or premium).
 * The SeatStatus enum defines the different statuses of a seat (available or booked).
 */

export enum SeatType {
    NORMAL = 'NORMAL',
    PREMIUM = 'PREMIUM'
}

export enum SeatStatus {
    AVAILABLE = 'AVAILABLE',
    BOOKED = 'BOOKED'
}

export default class Seat {
    private readonly _id: string;
    private readonly _row: number;
    private readonly _column: number;
    private readonly _type: SeatType;
    private readonly _price: number;
    private _status: SeatStatus;


    constructor(id: string, row: number, column: number, type: SeatType, price: number, status: SeatStatus) {
        this._id = id;
        this._row = row;
        this._column = column;
        this._type = type;
        this._price = price;
        this._status = status;
    }

    get id(): string {
        return this._id;
    }

    get row(): number {
        return this._row;
    }

    get column(): number {
        return this._column;
    }

    get type(): SeatType {
        return this._type;
    }

    get price(): number {
        return this._price;
    }

    get status(): SeatStatus {
        return this._status;
    }

    set status(value: SeatStatus) {
        this._status = value;
    }
}
/**
 * The Booking class represents a booking made by a user, with properties such as ID, user, show, selected seats, total price, and status.
 * The BookingStatus enum defines the different statuses of a booking (pending, confirmed, or cancelled).
 */
import User from "./user";
import Show from "./show";
import Seat from "./seat";

export enum BookingStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED'
}

export default class Booking {
    private readonly _id: string;
    private readonly _user: User;
    private readonly _show: Show;
    private readonly _seats: Seat[];
    private readonly _totalPrice: number;
    private _bookingStatus: BookingStatus;


    constructor(id: string, user: User, show: Show, seats: Seat[], totalPrice: number, bookingStatus: BookingStatus) {
        this._id = id;
        this._user = user;
        this._show = show;
        this._seats = seats;
        this._totalPrice = totalPrice;
        this._bookingStatus = bookingStatus;
    }


    get id(): string {
        return this._id;
    }

    get user(): User {
        return this._user;
    }

    get show(): Show {
        return this._show;
    }

    get seats(): Seat[] {
        return this._seats;
    }

    get totalPrice(): number {
        return this._totalPrice;
    }

    get bookingStatus(): BookingStatus {
        return this._bookingStatus;
    }


    set bookingStatus(value: BookingStatus) {
        this._bookingStatus = value;
    }
}
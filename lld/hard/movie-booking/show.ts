/**
 * The Show class represents a movie show in a theater, with properties such as ID, movie, theater, start time, end time,
 * and a map of seats.
 */
import Movie from "./movie";
import Theater from "./theater";
import Seat from "./seat";

export default class Show {
    private readonly _id: string;
    private readonly _movie: Movie;
    private readonly _theater: Theater;
    private readonly _startTime: Date;
    private readonly _endTime: Date;
    private readonly _seats: Map<string, Seat>;

    constructor(id: string, movie: Movie, theater: Theater, startTime: Date, endTime: Date, seats: Map<string, Seat>) {
        this._id = id;
        this._movie = movie;
        this._theater = theater;
        this._startTime = startTime;
        this._endTime = endTime;
        this._seats = seats;
    }

    get id(): string {
        return this._id;
    }

    get movie(): Movie {
        return this._movie;
    }

    get theater(): Theater {
        return this._theater;
    }

    get startTime(): Date {
        return this._startTime;
    }

    get endTime(): Date {
        return this._endTime;
    }

    get seats(): Map<string, Seat> {
        return this._seats;
    }
}
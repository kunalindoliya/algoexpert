/**
 * The MovieTicketBookingSystem class is the main class that manages the movie ticket booking system.
 * It follows the Singleton pattern to ensure only one instance of the system exists.
 */
import Movie from "./movie";
import Theater from "./theater";
import Show from "./show";
import Booking, {BookingStatus} from "./booking";
import User from "./user";
import Seat, {SeatStatus} from "./seat";

export default class MovieTicketBookingSystem {
    private static instance: MovieTicketBookingSystem;
    private readonly movies: Movie[];
    private readonly theaters: Theater[];
    private readonly shows: Map<string, Show>;
    private readonly bookings: Map<string, Booking>;

    private static readonly BOOKING_ID_PREFIX = 'BKG';
    private static bookingCounter = 0;

    constructor() {
        this.movies = [];
        this.theaters = [];
        this.shows = new Map();
        this.bookings = new Map();
    }

    static getInstance(): MovieTicketBookingSystem {
        if (!this.instance) {
            this.instance = new MovieTicketBookingSystem();
        }
        return this.instance;
    }

    addMovie(movie: Movie): void {
        this.movies.push(movie);
    }

    addTheater(theater: Theater): void {
        this.theaters.push(theater);
    }

    addShow(show: Show): void {
        this.shows.set(show.id, show);
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    getTheaters(): Theater[] {
        return this.theaters;
    }

    getShow(showId: string): Show | undefined {
        return this.shows.get(showId);
    }

    bookTickets(user: User, show: Show, selectedSeats: Seat[]) {
        if (this.areSeatsAvailable(show, selectedSeats)) {
            this.markSeatsAsBooked(show, selectedSeats);
            const totalPrice = this.calculateTotalPrice(selectedSeats);
            const bookingId = this.generateBookingId();
            const booking = new Booking(bookingId, user, show, selectedSeats, totalPrice, BookingStatus.PENDING);
            this.bookings.set(bookingId, booking);
            return booking;
        }
        return null;
    }

    private areSeatsAvailable(show: Show, selectedSeats: Seat[]): boolean {
        for (const seat of selectedSeats) {
            const showSeat = show.seats.get(seat.id);
            if (!showSeat || showSeat.status !== SeatStatus.AVAILABLE) {
                return false;
            }
        }
        return true;
    }

    private markSeatsAsBooked(show: Show, selectedSeats: Seat[]): void {
        for (const seat of selectedSeats) {
            const showSeat = show.seats.get(seat.id);
            if (showSeat) {
                showSeat.status = SeatStatus.BOOKED;
            }
        }
    }

    private calculateTotalPrice(selectedSeats: Seat[]): number {
        return selectedSeats.reduce((total, seat) => total + seat.price, 0);
    }

    private generateBookingId(): string {
        const bookingNumber = ++MovieTicketBookingSystem.bookingCounter;
        const timestamp = new Date().toLocaleString();
        return `${MovieTicketBookingSystem.BOOKING_ID_PREFIX}${timestamp}${String(bookingNumber).padStart(6, '0')}`;
    }

    public confirmBooking(bookingId: string): void {
        const booking = this.bookings.get(bookingId);
        if (booking && booking.bookingStatus === BookingStatus.PENDING) {
            booking.bookingStatus = BookingStatus.CONFIRMED;
            // Process payment and send confirmation
            // ...
        }
    }

    public cancelBooking(bookingId: string): void {
        const booking = this.bookings.get(bookingId);
        if (booking && booking.bookingStatus !== BookingStatus.CANCELLED) {
            booking.bookingStatus = BookingStatus.CANCELLED;
            this.markSeatsAsAvailable(booking.show, booking.seats);
            // Process refund and send cancellation notification
            // ...
        }
    }

    private markSeatsAsAvailable(show: Show, seats: Seat[]): void {
        for (const seat of seats) {
            const showSeat = show.seats.get(seat.id);
            if (showSeat) {
                showSeat.status = SeatStatus.AVAILABLE;
            }
        }
    }

}
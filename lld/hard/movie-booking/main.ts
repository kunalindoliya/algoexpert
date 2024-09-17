/**
 * https://github.com/ashishps1/awesome-low-level-design/blob/main/problems/movie-ticket-booking-system.md
 * Requirements
 * The system should allow users to view the list of movies playing in different theaters.
 * Users should be able to select a movie, theater, and show timing to book tickets.
 * The system should display the seating arrangement of the selected show and allow users to choose seats.
 * Users should be able to make payments and confirm their booking.
 * The system should handle concurrent bookings and ensure seat availability is updated in real-time.
 * The system should support different types of seats (e.g., normal, premium) and pricing.
 * The system should allow theater administrators to add, update, and remove movies, shows, and seating arrangements.
 * The system should be scalable to handle a large number of concurrent users and bookings.
 */
import Seat, {SeatStatus, SeatType} from "./seat";
import MovieTicketBookingSystem from "./movie-ticket-booking-system";
import Movie from "./movie";
import Theater from "./theater";
import Show from "./show";
import User from "./user";

function main() {
    const bookingSystem = MovieTicketBookingSystem.getInstance();

    // Add movies
    const movie1 = new Movie("M1", "Movie 1", "Description 1", 120);
    const movie2 = new Movie("M2", "Movie 2", "Description 2", 135);
    bookingSystem.addMovie(movie1);
    bookingSystem.addMovie(movie2);

    // Add theaters
    const theater1 = new Theater("T1", "Theater 1", "Location 1", []);
    const theater2 = new Theater("T2", "Theater 2", "Location 2", []);
    bookingSystem.addTheater(theater1);
    bookingSystem.addTheater(theater2);

    // Add shows
    const show1 = new Show("S1", movie1, theater1, new Date(), addMinutes(new Date(), movie1.getDurationInMinutes()), createSeats(10, 10));
    const show2 = new Show("S2", movie2, theater2, new Date(), addMinutes(new Date(), movie2.getDurationInMinutes()), createSeats(8, 8));
    bookingSystem.addShow(show1);
    bookingSystem.addShow(show2);

    // Book tickets
    const user = new User("U1", "John Doe", "john@example.com");
    const selectedSeats = [show1.seats.get("1-5"), show1.seats.get("1-6")].filter((seat): seat is Seat => seat !== undefined);
    const booking = bookingSystem.bookTickets(user, show1, selectedSeats);
    if (booking != null) {
        console.log("Booking successful. Booking ID: " + booking.id);
        bookingSystem.confirmBooking(booking.id);
    } else {
       console.log("Booking failed. Seats not available.")
    }

    // Cancel booking
    if (booking) {
        bookingSystem.cancelBooking(booking.id);
        console.log("Booking canceled. Booking ID: " + booking.id)
    }

}

function createSeats(rows: number, cols: number) {
    const seats = new Map<string, Seat>();
    for (let row=1; row<=rows;row++) {
        for (let col = 1; col <= cols; col++) {
            const seatId = `${row}-${col}`;
            const seatType = row <=2 ? SeatType.PREMIUM : SeatType.NORMAL;
            const price = seatType === SeatType.PREMIUM ? 150.0 : 100.0;
            const seat = new Seat(seatId, row, col, seatType, price, SeatStatus.AVAILABLE);
            seats.set(seatId, seat);
        }
    }
    return seats;
}

function addMinutes(date: Date, minutes: number): Date {
    const result = new Date(date);
    result.setTime(result.getTime() + minutes * 60000); // 60000 ms = 1 minute
    return result;
}

main();
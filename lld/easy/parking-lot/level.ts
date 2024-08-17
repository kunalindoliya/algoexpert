/**
 * The Level class represents a level in the parking lot and contains a list of parking spots.
 * It handles parking and unparking of vehicles within the level.
 */
import ParkingSpot from "./parking-spot";
import Vehicle, {VehicleType} from "./vehicles/vehicle";

export default class Level {
    private parkingSpots: ParkingSpot[];
    private floor: number;

    constructor(floor: number, numSpots: number, vehicleType: VehicleType) {
        this.floor = floor;
        this.parkingSpots = []
        for (let i = 0; i < numSpots; i++) {
            this.parkingSpots.push(new ParkingSpot(i, vehicleType));
        }
    }

    parkVehicle(vehicle: Vehicle): boolean {
        for (let spot of this.parkingSpots) {
            if (spot.isAvailable() && spot.getVehicleType() === vehicle.getType()) {
                spot.parkVehicle(vehicle);
                return true;
            }
        }
        return false;
    }

    unparkVehicle(vehicle: Vehicle): boolean {
        for (let spot of this.parkingSpots) {
            if (!spot.isAvailable() && spot.getParkedVehicle() === vehicle) {
                spot.unparkVehicle()
                return true;
            }
        }
        return false;
    }

    displayAvailability() {
        console.log("Level: " + this.floor + " Availability:");
        for (let spot of this.parkingSpots) {
            console.log("spot " + spot.getSpotNumber() + ": " + (spot.isAvailable() ? "Available" : "Occupied"))
        }
    }
}
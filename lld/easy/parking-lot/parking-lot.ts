/**
 * The ParkingLot class follows the Singleton pattern to ensure only one instance of the parking lot exists.
 * It maintains a list of levels and provides methods to park and unpark vehicles.
 */
import Level from "./level";
import Vehicle from "./vehicles/vehicle";

export default class ParkingLot {
    // singleton pattern
    private static instance: ParkingLot;
    private levels: Level[];

    private constructor() {
        this.levels = [];
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ParkingLot();
        }
        return this.instance
    }

    addLevel(level: Level): void {
        this.levels.push(level);
    }

    parkVehicle(vehicle: Vehicle): boolean {
        for (let level of this.levels) {
            if (level.parkVehicle(vehicle)) {
                return true;
            }
        }
        return false;
    }

    unparkVehicle(vehicle: Vehicle): boolean {
        for (let level of this.levels) {
            if (level.unparkVehicle(vehicle)) {
                return true;
            }
        }
        return false;
    }
    displayAvailability(): void {
        for (let level of this.levels) {
            level.displayAvailability();
        }
    }
}
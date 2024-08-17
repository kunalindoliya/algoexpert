/**
 * The ParkingSpot class represents an individual parking spot and tracks the availability and the parked vehicle.
 */
import Vehicle, {VehicleType} from "./vehicles/vehicle";

export default class ParkingSpot {
    spotNumber: number;
    parkedVehicle: Vehicle | null;
    vehicleType: VehicleType;

    constructor(spotNumber: number, vehicleType: VehicleType) {
        this.spotNumber = spotNumber;
        this.vehicleType = vehicleType || VehicleType.CAR // default
        this.parkedVehicle = null;
    }

    isAvailable(): boolean {
        return this.parkedVehicle === null;
    }

    parkVehicle(vehicle: Vehicle): void {
        if (this.isAvailable() && vehicle.getType() === this.vehicleType) {
            this.parkedVehicle = vehicle;
        } else {
            throw new Error("Illegal vehicleType or sport not vacant");
        }
    }

    unparkVehicle(): void {
        this.parkedVehicle = null;
    }

    getVehicleType(): VehicleType {
        return this.vehicleType
    }

    getSpotNumber(): number {
        return this.spotNumber;
    }

    getParkedVehicle(): Vehicle | null {
        return this.parkedVehicle;
    }
}
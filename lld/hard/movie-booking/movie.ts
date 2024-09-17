/**
 * The Movie class represents a movie with properties such as ID, title, description, and duration.
 */

export default class Movie {
    private readonly id: string;
    private readonly title: string;
    private readonly description: string;
    private readonly durationInMinutes: number;

    constructor(id: string, title: string, description: string, durationInMinutes: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.durationInMinutes = durationInMinutes;
    }

    getDurationInMinutes(): number {
        return this.durationInMinutes;
    }
}
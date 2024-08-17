/**
 * Note class to handle values of notes
 */

export default class Note {
    static readonly ONE = new Note(1);
    static readonly FIVE = new Note(5);
    static readonly TEN = new Note(10);
    static readonly TWENTY = new Note(20);

    private constructor(private readonly value: number) {
    }

    getValue(): number {
        return this.value;
    }
}


export class Frame {
    public frameNumber: number;
    public frameRolls: number[];

    constructor(frameNumber: number, frameRolls: number[]) {
        this.frameNumber = frameNumber;
        this.frameRolls = frameRolls;
    }
}
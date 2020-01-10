import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoringService {

  totalRolls: number[] = [];

  public getScore(totalRolls: number[]) {
    this.totalRolls = totalRolls;
    var score: number = 0;
    var rollIndex: number = 0;
    for (var frame = 0; frame < 10; frame++) {
      if (this.isStrike(rollIndex)) {
        score += this.getStrikeScore(rollIndex);
        rollIndex++;
      } else if (this.isSpare(rollIndex)) {
        score += this.getSpareScore(rollIndex);
        rollIndex += 2;
      } else {
        score += this.getStandardScore(rollIndex);
        rollIndex += 2;
      }
    }
    return score;
  }

  private isStrike(rollIndex: number) {
    return this.totalRolls[rollIndex] == 10;
  }

  private isSpare(rollIndex: number) {
    return this.totalRolls[rollIndex] + this.totalRolls[rollIndex + 1] == 10;
  }

  private getStrikeScore(rollIndex: number) {
    return this.totalRolls[rollIndex] + this.totalRolls[rollIndex + 1] + this.totalRolls[rollIndex + 2];
  }

  private getSpareScore(rollIndex: number) {
    return this.totalRolls[rollIndex] + this.totalRolls[rollIndex + 1] + this.totalRolls[rollIndex + 2];
  }

  private getStandardScore(rollIndex: number) {
    return this.totalRolls[rollIndex] + this.totalRolls[rollIndex + 1];
  }
}

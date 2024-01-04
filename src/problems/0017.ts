import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

interface DecomposedNumber {
  thousands: number;
  hundreds: number;
  tens: number;
  ones: number;
}

@RunSolution
class P0017 extends EulerSolution {
  getProblem(): string {
    return '0017 - Number Letter Counts';
  }

  solve(): number {
    return this.solution(1000);
  }

  solution(limit: number): number {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
      sum += this.getLetters(i);
    }
    return sum;
  }

  private onesLetter: number[] = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4];
  private specialTensLetters: number[] = [3, 6, 6, 8, 8, 7, 7, 9, 8, 8];
  private tensLetter: number[] = [0, 3, 6, 6, 5, 5, 5, 7, 6, 6];

  private getLetters(target: number): number {
    let coms = this.decomposeNumber(target);
    let sum = 0;

    if (coms.tens == 1) {
      sum += this.specialTensLetters[coms.ones];
    } else {
      sum += this.tensLetter[coms.tens] + this.onesLetter[coms.ones];
    }

    if (coms.hundreds > 0) {
      sum += 7 + this.onesLetter[coms.hundreds];
      if (coms.tens > 0 || coms.ones > 0) {
        sum += 3;
      }
    }

    if (coms.thousands > 0) {
      sum += 8 + this.onesLetter[coms.thousands];
    }

    return sum;
  }

  private decomposeNumber(target: number): DecomposedNumber {
    return {
      thousands: Math.floor(target / 1000),
      hundreds: Math.floor((target - 1000 * Math.floor(target / 1000)) / 100),
      tens: Math.floor((target - Math.floor(target / 100) * 100) / 10),
      ones: target % 10,
    };
  }
}

import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

@RunSolution
class P0009 extends EulerSolution {
  getProblem(): string {
    return '0009 - Special Pythagorean Triplet';
  }

  solve(): number {
    return this.solution(1000);
  }

  solution(sum: number): number {
    let a: number = 0;
    let b: number = 0;
    for (let i = 1; 2 * i < sum; i++) {
      if ((sum * (2 * i - sum)) % (2 * (i - sum)) == 0) {
        a = (sum * (2 * i - sum)) / (2 * (i - sum));
        b = i;
      }
    }
    return a * b * (sum - a - b);
  }
}

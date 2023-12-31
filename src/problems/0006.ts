import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

@RunSolution
class P0006 extends EulerSolution {
  getProblem(): string {
    return '0006 - Sum Square Difference';
  }

  solve(): number {
    return this.solution(100);
  }

  solution(limit: number): number {
    let sum = 0;
    let powSum = 0;

    for (let i = 1; i <= limit; i++) {
      sum += i;
      powSum += i ** 2;
    }

    return Math.abs(sum ** 2 - powSum);
  }
}

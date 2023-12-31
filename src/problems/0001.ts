import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

@RunSolution
export default class P0001 extends EulerSolution {
  getProblem(): string {
    return '0001 - Multiples of 3 or 5';
  }

  solve(): number {
    return this.solution(1000);
  }

  solution(limit: number): number {
    let sum = 0;
    for (let index = 1; index < limit; index++) {
      if (index % 3 == 0 || index % 5 == 0) {
        sum += index;
      }
    }
    return sum;
  }
}

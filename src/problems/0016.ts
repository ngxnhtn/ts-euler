import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

@RunSolution
class P0016 extends EulerSolution {
  getProblem(): string {
    return '0016 - Power Digit Sum';
  }

  solve(): number {
    return this.solution();
  }

  solution() {
    return BigInt(2 ** 1000)
      .toString()
      .split('')
      .reduce((prev, cur) => prev + +cur, 0);
  }
}

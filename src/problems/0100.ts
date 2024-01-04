import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

@RunSolution
class P0100 extends EulerSolution {
  getProblem(): string {
    return '0100 - Arranged Probability';
  }

  solve(): number {
    return this.solution(1_000_000_000_000);
  }

  solution(target: number): number {
    return 0;
  }

  getLookingB(b: number): number {
    return b * (b - 1);
  }
}

import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

@RunSolution
class P0015 extends EulerSolution {
  getProblem(): string {
    return '0015 - Lattice Paths';
  }

  solve(): number {
    return this.solution(20, 20);
  }

  private cache: { [key: string]: number } = {};

  solution(x: number, y: number): number {
    if (Object.keys(this.cache).indexOf(`${x}x${y}`) !== -1) {
      return this.cache[`${x}x${y}`];
    } else {
      if (x == 0 || y == 0) {
        this.cache[`${x}x${y}`] = 1;
        return 1;
      } else {
        let result = this.solution(x - 1, y) + this.solution(x, y - 1);
        this.cache[`${x}x${y}`] = result;
        return result;
      }
    }
  }
}

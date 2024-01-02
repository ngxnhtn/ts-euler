import cliProgress from 'cli-progress';
import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';
import { getFactors } from '../utils/helper.js';

@RunSolution
class P0012 extends EulerSolution {
  getProblem(): string {
    return '0012 - Highly Divisible Triangular Number';
  }

  solve(): number {
    return this.solution(500); //294951ms
    // return this.solution2(76576500);
  }

  solution(target: number): number {
    let checker = false;
    let i = 1;

    const bar = new cliProgress.SingleBar({
      format: `Loading: {value}`,
    });

    bar.start(1000000, i);

    while (!checker) {
      if (this.getDivisor(this.getTriangleNumber(i)) >= target) {
        checker = true;
      } else {
        i++;
        bar.update(i);
      }
    }

    bar.stop();

    return this.getTriangleNumber(i);
  }

  getDivisor(target: number): number {
    let counter = 2;
    for (let i = 2; i <= target / 2 + 1; i++) {
      if (target % i == 0) {
        counter++;
      }
    }
    return counter;
  }

  getTriangleNumber(pos: number): number {
    return (pos * (pos + 1)) / 2;
  }

  solution2(target: number): number {
    let factors = getFactors(target);
    let factorAmount = Object.values(factors).reduce((a, b) => a + b, 0);

    let divisor = 0;

    for (let i = 1; i <= factorAmount; i++) {
      divisor += this.getBinomal(factorAmount, i);
    }

    return divisor;
  }

  getBinomal(n: number, k: number): number {
    var coeff = 1;
    for (var x = n - k + 1; x <= n; x++) coeff *= x;
    for (x = 1; x <= k; x++) coeff /= x;
    return coeff;
  }
}

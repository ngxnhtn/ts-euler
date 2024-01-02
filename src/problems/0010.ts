import cliProgress from 'cli-progress';
import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';
import { isPrime } from '../utils/helper.js';

@RunSolution
class P0010 extends EulerSolution {
  getProblem(): string {
    return '0010 - Summation of Primes';
  }

  solve(): number {
    return this.solution(2_000_000);
  }

  solution(limit: number) {
    let cachePrime: number[] = [];

    const bar = new cliProgress.SingleBar({
      format: `Loading: {value}/{total}`,
    });

    bar.start(limit - 2, 1);

    for (let i = 2; i < limit; i++) {
      if (isPrime(i)) {
        cachePrime.push(i);
      }
      bar.update(i - 1);
    }

    bar.stop();

    return cachePrime.reduce((a, b) => a + b, 0);
  }
}

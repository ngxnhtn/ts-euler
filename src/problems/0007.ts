import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';
import { isPrime } from '../utils/helper.js';

@RunSolution
class P0007 extends EulerSolution {
  getProblem(): string {
    return '0007 - 10001st Prime';
  }

  solve(): number {
    return this.solution(10_001);
  }

  solution(limit: number): number {
    let prime = [];
    let i = 2;

    while (prime.length < limit) {
      if (isPrime(i)) {
        prime.push(i);
      }
      i++;
    }
    // console.log(prime);
    return prime[prime.length - 1];
  }
}

import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

@RunSolution
class P0002 extends EulerSolution {
  getProblem(): string {
    return '0002 - Even Fibonacci Numbers';
  }

  solve(): number {
    return this.solution(4_000_000);
  }

  solution(limit: number) {
    const cacheFibo = [1, 2];
    while (
      cacheFibo[cacheFibo.length - 1] + cacheFibo[cacheFibo.length - 2] <
      limit
    ) {
      cacheFibo.push(
        cacheFibo[cacheFibo.length - 1] + cacheFibo[cacheFibo.length - 2]
      );
    }
    return cacheFibo.reduce(
      (prev, cur) => (cur % 2 == 0 ? prev + cur : prev),
      0
    );
  }
}

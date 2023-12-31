import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

@RunSolution
class P0003 extends EulerSolution {
  getProblem(): string {
    return '0003 - Largest Prime Factor';
  }

  solve(): number {
    // return this.solution(13_195);
    return this.solution(600_851_475_143);
  }

  solution(target: number) {
    let dividor = target;
    let largestFactor: number[] = [];
    let i = 2;

    while (i < target / 2 && dividor >= i) {
      if (dividor % i == 0) {
        largestFactor.push(i);
        dividor = dividor / i;
      }
      i++;
    }

    // console.log(largestFactor);

    return largestFactor[largestFactor.length - 1];
  }
}

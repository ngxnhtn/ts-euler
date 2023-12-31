import cliProgress from 'cli-progress';
import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';
import { getFactors } from '../utils/helper.js';

@RunSolution
class P0005 extends EulerSolution {
  getProblem(): string {
    return '0005 - Smallest Multiple';
  }

  solve(): number {
    // return this.solution(20);    // 58761ms
    return this.solution2(20); //1ms
  }

  solution(target: number) {
    const bar = new cliProgress.SingleBar(
      {
        format: 'Running: {value}',
      },
      cliProgress.Presets.legacy
    );
    bar.start(1000000000, 2);

    let checker = false;
    let i = 2;

    while (!checker) {
      if (this.isDivisibleByNumber(i, target)) {
        checker = true;
      } else {
        i++;
        bar.update(i);
      }
    }

    bar.stop();

    return i;
  }

  isDivisibleByNumber(target: number, limit: number = 10): boolean {
    for (let i = 2; i <= limit; i++) {
      if (target % i !== 0) {
        return false;
      }
    }
    return true;
  }

  solution2(target: number): number {
    const concreteFactor: { [key: number]: number } = {};

    for (let i = 2; i <= target; i++) {
      let factors = getFactors(i);
      // console.log(i, factors);
      let concreteFactorList = Object.keys(concreteFactor);
      let factorList = Object.keys(factors);

      factorList.forEach((factor) => {
        if (
          concreteFactorList.indexOf(factor) == -1 ||
          concreteFactor[parseInt(factor)] < factors[parseInt(factor)]
        ) {
          concreteFactor[parseInt(factor)] = factors[parseInt(factor)];
        }
      });
    }

    // console.log(concreteFactor);

    return Object.keys(concreteFactor).reduce(
      (prev, cur): number =>
        prev * parseInt(cur) ** concreteFactor[parseInt(cur)],
      1
    );
  }
}

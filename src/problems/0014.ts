import cliProgress from 'cli-progress';
import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

@RunSolution
class P0014 extends EulerSolution {
  getProblem(): string {
    return '0014 - Longest Collatz Sequence';
  }

  solve(): number {
    // console.log(this.getCollatz(13));

    // return 0;
    return this.solution(1_000_000);
  }

  private cacheCollatz: { [key: number]: number[] } = { 2: [1] };

  solution(limit: number): number {
    let maximum: number[] = [];
    const bar = new cliProgress.SingleBar({
      format: 'Loading {value}/{total}',
    });

    bar.start(limit, 1);

    for (let i = 1; i < limit; i++) {
      let temp = this.getCollatz(i);
      maximum = maximum.length < temp.length ? temp : maximum;
      bar.update(i);
    }

    bar.stop();

    return maximum[0];
  }

  getCollatz(target: number): number[] {
    let list: number[] = [target];

    if (Object.keys(this.cacheCollatz).indexOf(target.toString()) == -1) {
      if (target == 1) {
        this.cacheCollatz[target] = list;
        return list;
      } else if (target % 2 == 0) {
        list.push(...this.getCollatz(target / 2));
        this.cacheCollatz[target] = list;
        return list;
      } else {
        list.push(...this.getCollatz(3 * target + 1));
        this.cacheCollatz[target] = list;
        return list;
      }
    } else {
      return this.cacheCollatz[target];
    }
  }
}

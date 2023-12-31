import fs from 'fs';
import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

@RunSolution
class P0008 extends EulerSolution {
  getProblem(): string {
    return '0008 - Largest Product in a Series';
  }

  async solve(): Promise<number> {
    return await this.solution(13);
  }

  async solution(limit: number) {
    let dirName = new URL('.', import.meta.url).pathname;
    let data = await fs
      .readFileSync(`${dirName}../data/0008.txt`, 'utf-8')
      .split('\n')
      .join('');
    let max = 0;
    for (let i = 0; i <= data.length - limit; i++) {
      let string = data.slice(i, i + limit);
      let x = string.split('').reduce((prev, cur) => prev * parseInt(cur), 1);
      if (x > max) {
        max = x;
      }
    }
    return max;
  }
}

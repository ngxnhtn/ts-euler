import fs from 'fs';
import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';
import { getFileName } from '../utils/helper.js';

@RunSolution
class P0013 extends EulerSolution {
  getProblem(): string {
    return '0013 - Largest Sum';
  }

  async solve(): Promise<number> {
    return this.solution();
  }

  async solution(): Promise<number> {
    const data = await this.getData();
    const sum = data.reduce((prev, cur) => prev + BigInt(cur), 0n).toString();
    return parseInt(sum.substring(0, 10));
  }

  async getData(): Promise<number[]> {
    const data = await fs
      .readFileSync(getFileName('..', 'data', '0013.txt'), 'utf-8')
      .split('\n')
      .map((x) => +x);
    return data;
  }
}

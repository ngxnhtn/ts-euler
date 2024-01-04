import fs from 'fs';
import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';
import { getFileName } from '../utils/helper.js';

@RunSolution
class P0018 extends EulerSolution {
  getProblem(): string {
    return '0018 - Maximum Path Sum I';
  }

  async solve(): Promise<number> {
    return this.solution();
  }

  async solution(): Promise<number> {
    const data = await this.getData();
    return this.calculateEachRow(data)[0];
  }

  private loadCache(arrayUp: number[], arrayDown: number[]): number[] {
    let result: number[] = [];
    if (arrayUp.length !== arrayDown.length - 1) {
      return result;
    } else {
      for (let i = 0; i < arrayUp.length; i++) {
        if (arrayDown[i] > arrayDown[i + 1]) {
          result.push(arrayUp[i] + arrayDown[i]);
        } else {
          result.push(arrayUp[i] + arrayDown[i + 1]);
        }
      }
      return result;
    }
  }

  private calculateEachRow(arrayNumber: number[][]): number[] {
    if (arrayNumber.length == 1) {
      return arrayNumber[0];
    } else {
      let newRow = this.loadCache(
        arrayNumber[arrayNumber.length - 2],
        arrayNumber[arrayNumber.length - 1]
      );
      arrayNumber.splice(arrayNumber.length - 2, 2);
      arrayNumber.push(newRow);
      return this.calculateEachRow(arrayNumber);
    }
  }

  private async getData(): Promise<number[][]> {
    const dataPath = getFileName('..', 'data', '0018.txt');
    const data = await fs.readFileSync(dataPath, 'utf-8').split('\n');
    return data.map((row) => row.split(' ').map((cell) => parseInt(cell)));
  }
}

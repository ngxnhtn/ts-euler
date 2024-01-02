import fs from 'fs';
import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';
import { getFileName } from '../utils/helper.js';

@RunSolution
class P0011 extends EulerSolution {
  getProblem(): string {
    return '0011 - Largest Product in a Grid';
  }

  async solve(): Promise<number> {
    return await this.solution();
  }

  async solution(): Promise<number> {
    let data = await this.getData();
    let greatestProduct = 0;

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].length; j++) {
        // Up
        if (i <= data.length - 4) {
          greatestProduct =
            greatestProduct >
            data[i][j] * data[i + 1][j] * data[i + 2][j] * data[i + 3][j]
              ? greatestProduct
              : data[i][j] * data[i + 1][j] * data[i + 2][j] * data[i + 3][j];
        }
        // Right
        if (j <= data[i].length - 4) {
          greatestProduct =
            greatestProduct >
            data[i][j] * data[i][j + 1] * data[i][j + 2] * data[i][j + 3]
              ? greatestProduct
              : data[i][j] * data[i][j + 1] * data[i][j + 2] * data[i][j + 3];
        }
        // Diagonally Up
        if (i <= data.length - 4 && j >= 3) {
          greatestProduct =
            greatestProduct >
            data[i][j] *
              data[i + 1][j - 1] *
              data[i + 2][j - 2] *
              data[i + 3][j - 3]
              ? greatestProduct
              : data[i][j] *
                data[i + 1][j - 1] *
                data[i + 2][j - 2] *
                data[i + 3][j - 3];
        }
        // Diagonally Down
        if (i <= data.length - 4 && j <= data[i].length - 4) {
          greatestProduct =
            greatestProduct >
            data[i][j] *
              data[i + 1][j + 1] *
              data[i + 2][j + 2] *
              data[i + 3][j + 3]
              ? greatestProduct
              : data[i][j] *
                data[i + 1][j + 1] *
                data[i + 2][j + 2] *
                data[i + 3][j + 3];
        }
      }
    }

    return greatestProduct;
  }

  async getData(): Promise<number[][]> {
    const data = await fs
      .readFileSync(getFileName('..', 'data', '0011.txt'), 'utf-8')
      .split('\n')
      .map((x) => x.split(' '));

    let satinizedData = data.map((x) => {
      return x.map((y) => {
        return parseInt(y);
      });
    });

    return satinizedData;
  }
}

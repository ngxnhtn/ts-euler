import chalk from 'chalk';

export abstract class EulerSolution {
  abstract getProblem(): string;

  abstract solve(): number | Promise<number>;

  async run() {
    const startTime = new Date();
    console.log('-------------------------------------------');
    console.log(chalk.green(`Problem ${this.getProblem()}`));
    const result = await this.solve();
    const endTime = new Date();
    console.log(`Result: ${result}`);
    console.log(`Execution time: ${+endTime - +startTime}ms`);
    console.log('-------------------------------------------');
  }
}

export function RunSolution(constructor: new () => any) {
  new constructor().run();
}

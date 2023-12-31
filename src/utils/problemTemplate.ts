export default function problemTemplate(problemNumber: string): string {
  return `import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

@RunSolution
class P${problemNumber} extends EulerSolution {
  getProblem(): string {
    return '${problemNumber}';
  }

  solve(): number {
    return this.solution();
  }

  solution() {
    return 0
  }
}
`;
}

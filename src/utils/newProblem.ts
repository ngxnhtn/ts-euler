import fs from 'fs';
import path from 'path';
import problemTemplate from './problemTemplate.js';

export default async function newProblem(
  problemNumber: number,
  force: boolean | undefined
): Promise<void> {
  let dirName = new URL('.', import.meta.url).pathname;
  const problemString = `${problemNumber}`.padStart(4, '0');
  const problemSolutionTemplate = problemTemplate(problemString);
  const problemPath = path.join(
    dirName,
    '..',
    'problems',
    `${problemString}.ts`
  );

  if (fs.existsSync(problemPath)) {
    if (force) {
      fs.writeFileSync(problemPath, problemSolutionTemplate);
      console.log(`Overwrite ${problemString}`);
    } else {
      console.log(`Existed ${problemString}. Please force to rewrite`);
    }
  } else {
    fs.writeFileSync(problemPath, problemSolutionTemplate);
    console.log(`New write ${problemString}`);
  }
}

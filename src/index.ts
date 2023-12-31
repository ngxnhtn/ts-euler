#!/usr/bin/env node
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import util from 'util';
import yargs from 'yargs/yargs';
import newProblem from './utils/newProblem.js';

const parser = yargs(process.argv.slice(2)).options({
  create: {
    alias: 'c',
    demandOption: false,
    describe: 'Create new problem file',
    type: 'number',
  },
  run: {
    alias: 'r',
    demandOption: false,
    describe: 'Run solution',
    type: 'number',
  },
  force: {
    alias: 'f',
    demandOption: false,
    type: 'boolean',
  },
  all: {
    alias: 'a',
    demandOption: false,
    type: 'boolean',
  },
});

(async () => {
  const args = await parser.argv;

  if (args.create !== undefined) {
    newProblem(args.create, args.force);
  }

  if (args.run !== undefined) {
    let dirName = new URL('.', import.meta.url).pathname;
    let problemName = `${args.run}`.padStart(4, '0');
    let problemPath = path.join(dirName, 'problems', `${problemName}.ts`);
    import(problemPath);
  }

  if (args.all !== undefined) {
    let dirName = new URL('.', import.meta.url).pathname;
    let fileList = await fs.readdirSync(path.join(dirName, 'problems'));
    fileList.forEach(async (file) => {
      let problemPath = path.join(dirName, 'problems', file);
      let promisedExec = util.promisify(exec);
      let { stdout } = await promisedExec(`tsx ${problemPath}`);
      console.log(stdout);
    });
  }
})();

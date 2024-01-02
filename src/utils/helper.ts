import path from 'path';

export function isPrime(target: number): boolean {
  for (let index = 2; index < target / 2 + 1; index++) {
    if (target % index == 0) {
      return false;
    }
  }
  return true;
}

export function getFactors(target: number): { [key: number]: number } {
  let dividor = target;
  let factor: { [key: number]: number } = {};
  let i = 2;

  while (i < target / 2 + 1 && dividor >= i) {
    if (dividor % i == 0) {
      if (Object.keys(factor).indexOf(i.toString()) == -1) {
        factor[i] = 1;
      } else {
        factor[i] = factor[i] += 1;
      }
      dividor = dividor / i;
    } else {
      i++;
    }
  }

  if (Object.keys(factor).length == 0) {
    factor[target] = 1;
  }

  return factor;
}

export function getFileName(...args: string[]) {
  let dirName = new URL('.', import.meta.url).pathname;
  return path.join(dirName, ...args);
}

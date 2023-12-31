import { EulerSolution, RunSolution } from '../utils/eulerSolution.js';

@RunSolution
class P0004 extends EulerSolution {
  getProblem(): string {
    return '0004 - Largest Palindrome Product';
  }

  solve(): number {
    return this.solution();
  }

  solution() {
    let largestPalindrome = 0;

    for (let i = 100; i <= 999; i++) {
      for (let j = 100; j <= 999; j++) {
        if (this.isPalindrome(i * j) && i * j > largestPalindrome) {
          largestPalindrome = i * j;
        }
      }
    }

    return largestPalindrome;
  }

  isPalindrome(target: number): boolean {
    let cache = target.toString();

    return cache == cache.split('').reverse().join('');
  }
}

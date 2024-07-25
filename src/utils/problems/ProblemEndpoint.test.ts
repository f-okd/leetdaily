import { test, expect } from 'vitest';
import { ProblemEndpoint } from './ProblemEndpoint';
import { Category, treeProblems } from './__data__/Problems';

test('Expect getRandomInteger function to return a random integer between specified params', () => {
  const p = new ProblemEndpoint();
  const integer = p.getRndInteger(0, 3);
  expect(integer).toBeGreaterThanOrEqual(0);
  expect(integer).toBeLessThanOrEqual(3);
});
test('Expect getRandomProblem function to return a random problem URL from our list of all problems', () => {
  const p = new ProblemEndpoint();
  const questionUrl = p.getRandomProblem(Category.ALL);
  expect(p.listOfAllProblems).toContain(questionUrl);
});
test('Expect getRandomProblem function to return a random problem URL from a problem list of the corresponding category', () => {
  const p = new ProblemEndpoint();
  const questionUrl = p.getRandomProblem(Category.TREES);
  expect(treeProblems).toContain(questionUrl);
});

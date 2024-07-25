import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import App from './App';
// import { ProblemEndpoint } from './ProblemEndpoint';

test('Renders page, with default select option as "ALL"', async () => {
  render(<App />);

  const select = screen.getByTestId('category_select');
  expect(select).toHaveTextContent('ALL');
});
test('Currently selected category should change when user clicks a different option', async () => {
  render(<App />);

  const select = screen.getByTestId('category_select');
  await userEvent.click(select);
  await userEvent.click(screen.getByTestId('BACKTRACKING'));
  expect(select).toHaveTextContent('BACKTRACKING');
});
// test('Problem endpoint class should be called, with the correct category when user clicks go button', async () => {
//   render(<App />);

//   const methodSpy = vi.spyOn(ProblemEndpoint.prototype, 'getRandomProblem');

//   const select = screen.getByTestId('category_select');
//   await userEvent.click(select);
//   await userEvent.click(screen.getByTestId('ARRAYS'));

//   expect(select).toHaveTextContent('ARRAYS');

//   const button = screen.getByTestId('search_button');
//   await userEvent.click(button);
//   expect(methodSpy).toHaveBeenCalled();
// });

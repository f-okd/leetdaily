import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import CategorySelect from './CategorySelect';
import { Category } from '../../utils/problems/__data__/Problems';

test('Loads category select component with all categories listed', async () => {
  render(<CategorySelect onChange={() => {}} />);

  const select = screen.getByTestId('category_select');
  expect(select).toBeInTheDocument();

  await userEvent.click(select);

  expect(screen.getByTestId('category_select_label')).toHaveTextContent('Choose a category:');
  Object.keys(Category).forEach((category) => {
    expect(screen.getByTestId(category.replace(/_/g, ' '))).toBeInTheDocument();
  });
});

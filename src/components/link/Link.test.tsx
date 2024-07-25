import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { expect, test, vi } from 'vitest';
import Link from './Link';

test('Renders link component, which calls the function passed as props when clicked', async () => {
  const mockFn = vi.fn();

  render(<Link onClick={mockFn}>Source code</Link>);

  const link = screen.getByTestId('github_link');
  expect(link).toBeInTheDocument();

  await userEvent.click(link);
  expect(mockFn).toHaveBeenCalled();
});
test('Renders link component, correctly rendering the children as the text content', async () => {
  const mockFn = vi.fn();

  render(<Link onClick={mockFn}>Source code</Link>);

  const link = screen.getByTestId('github_link');
  expect(link).toBeInTheDocument();

  expect(screen.getByTestId('github_link')).toHaveTextContent('Source code');
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { expect, test, vi } from 'vitest';
import App from './App';

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

test('Global chrome api should be called to open the github repo in new tab when user clicks source code link', async () => {
  // Mock chrome.tabs.create before rendering
  const createTabMock = vi.fn();
  vi.stubGlobal('chrome', {
    tabs: {
      create: createTabMock,
    },
  });

  render(<App />);

  const link = screen.getByTestId('github_link');

  await userEvent.click(link);

  expect(createTabMock).toHaveBeenCalledWith({
    url: 'https://github.com/f-okd/leetdaily',
  });

  vi.unstubAllGlobals();
});

test('Global chrome api should be called to open leetcode question in new tab when user clicks go', async () => {
  // Mock chrome.tabs.create before rendering
  const createTabMock = vi.fn();
  vi.stubGlobal('chrome', {
    tabs: {
      create: createTabMock,
    },
  });

  render(<App />);

  const button = screen.getByTestId('search_button');
  await userEvent.click(button);

  expect(createTabMock).toHaveBeenCalledWith(
    expect.objectContaining({
      url: expect.stringContaining('https://leetcode.com/problems/'),
    }),
  );

  vi.unstubAllGlobals();
});

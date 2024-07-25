import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { expect, test, vi } from "vitest";
import Button from "./Button";

test("Renders button, which calls the function passed as props when clicked", async () => {
  const mockFn = vi.fn();

  render(<Button onClick={mockFn}>Go</Button>);

  const button = screen.getByTestId("search_button");
  expect(button).toBeInTheDocument();

  await userEvent.click(button);
  expect(mockFn).toHaveBeenCalled();
});

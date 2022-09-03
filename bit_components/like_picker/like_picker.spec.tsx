import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BasicLikePicker } from "./like_picker.composition";
import LikePicker from "./like_picker";

test("number of filled stars", () => {
  render(<BasicLikePicker />);
  const element = screen.getAllByText("★");
  expect(element.length).toBe(3);
});

test("number of empty stars", () => {
  render(<BasicLikePicker />);
  const elements = screen.getAllByText("☆");
  expect(elements.length).toBe(2);
});

test("click test", () => {
  const handleChange = jest.fn();
  render(
    <div className="App">
      <LikePicker max={5} value={1} onChange={handleChange} />
    </div>
  );
  let elements = screen.getAllByText("☆");
  expect(elements.length).toBe(4);
  fireEvent.click(elements[2]);
  expect(handleChange).toBeCalledTimes(1);
});

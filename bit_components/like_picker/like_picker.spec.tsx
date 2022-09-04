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

test("click handleChange", () => {
  const handleChange = jest.fn();
  render(
    <div className="App">
      <LikePicker max={5} value={1} onChange={handleChange} />
    </div>
  );
  const elements = screen.getAllByText("☆");
  expect(elements.length).toBe(4);
  fireEvent.click(elements[2]);
  expect(handleChange).toBeCalledTimes(1);
});

test("click change state", async () => {
  render(<BasicLikePicker />);
  const elements = screen.getAllByText("☆");
  expect(elements.length).toBe(2);
  fireEvent.click(elements[0]);
  expect(screen.getAllByText("☆").length).toBe(1);
});

test("hover effect", () => {
  render(
    <div className="App">
      <LikePicker max={5} value={1} color="red" activeColor="green" />
    </div>
  );
  let elements = screen.getAllByText("☆");
  expect(elements[0]).toHaveStyle("color: red");
  fireEvent.mouseOver(elements[0]);
  elements = screen.getAllByText("☆");
  expect(elements[0]).toHaveStyle("color: green");
});

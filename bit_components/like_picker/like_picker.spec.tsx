import React from "react";
import { render } from "@testing-library/react";
import { BasicLikePicker } from "./like_picker.composition";

it("should render with the correct text", () => {
  const { getByText } = render(<BasicLikePicker />);
  const rendered = getByText("bad");
  expect(rendered).toBeTruthy();
});

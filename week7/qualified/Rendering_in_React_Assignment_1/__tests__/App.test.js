import React from "react";
import { cleanup, render } from "@testing-library/react";
import App from "../src/App";

afterEach(cleanup);

test("Image is present", () => {
  const { container } = render(<App />);
  const element = container.querySelector("img");
  expect(element).toBeTruthy();
  expect(element.src).toBe(
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg"
  );
});

test("Name is present", () => {
  const { getByText } = render(<App />);
  const element = getByText("Kitty Kat");
  expect(element).toBeTruthy();
});

test("Birthday is present", () => {
  const { getByText } = render(<App />);
  const element = getByText(/January 1/);
  expect(element).toBeTruthy();
});

test("Hobbies are present", () => {
  const { getByText } = render(<App />);
  ["watching birds", "hiding in a box", "napping"].forEach((hobby) => {
    const element = getByText(hobby);
    expect(element).toBeTruthy();
  });
});

test("Daily activities are present", () => {
  const { getByText } = render(<App />);
  [
    { time: "8:00 am", description: "wake up" },
    { time: "8:30 am", description: "breakfast" },
    { time: "9:00 am", description: "morning nap" },
    { time: "12:00 pm", description: "lunch" },
    { time: "1:00 pm", description: "afternoon nap" },
    { time: "6:00 pm", description: "dinner" },
    { time: "7:00 pm", description: "play" },
    { time: "10:00 pm", description: "bedtime" },
  ].forEach((activity) => {
    const time = getByText(activity.time);
    const description = getByText(activity.description);
    expect(time).toBeTruthy();
    expect(description).toBeTruthy();
  });
});

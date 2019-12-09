import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, act } from "@testing-library/react";
import Controls from "./Controls"

// Test away!

test("the gate is closed", () => {
  const ButtonTest = rtl.render(<Controls />)
  const TestButton = ButtonTest.getByTestId("Door closed");
  expect(TestButton).not.toBeEnabled();
  rtl.fireEvent.click('button')
})







// ### Gate

//   - defaults to`unlocked` and`open`
//     - cannot be closed or opened if it is locked

// ### Controls Component

//   - provide buttons to toggle the`closed` and`locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
//   - the closed toggle button is disabled if the gate is locked
//     - the locked toggle button is disabled if the gate is open


// it('renders "success" text', () => {
//   const { getByText, findByText } = render(<App />);
//   // Click button
//   fireEvent.click(getByText("Get message!"));
//   findByText(/success/i);
// });
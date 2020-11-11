import React from "react";
import { render } from "@testing-library/react";

import FrequencyList from "components/FrequencyList";

const list = [
  { letter: "a", frequency: 6 },
  { letter: "s", frequency: 5 },
  { letter: "i", frequency: 4 },
  { letter: "m", frequency: 4 },
  { letter: "@", frequency: 2 },
  { letter: "u", frequency: 2 },
  { letter: "t", frequency: 2 },
  { letter: "k", frequency: 2 },
  { letter: "c", frequency: 2 },
  { letter: ".", frequency: 2 },
  { letter: "l", frequency: 2 },
  { letter: "g", frequency: 2 },
  { letter: "o", frequency: 2 }
]

describe("FrequencyList component", () => {
  const setup = () => {
    const component = render(
      <FrequencyList
        data={list}
      />,
    );

    return component;
  };

  test("Shows a table row per character", () => {
    const { getByText } = setup();

    list.forEach((row) => {
      expect(getByText(row.letter)).toBeInTheDocument();
    });
  });
});

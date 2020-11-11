import React from "react";
import { render } from "@testing-library/react";

import DuplicatesList from "components/DuplicatesList";

const list = [
  { email:"sakatius@gmail.com", duplicated: "sakatiuss@gmail.com" }
]

describe("DuplicatesList component", () => {
  const setup = () => {
    const component = render(
      <DuplicatesList
        data={list}
      />,
    );

    return component;
  };

  test("Shows Table Headers", () => {
    const { getByText } = setup();

    list.forEach((row) => {
      expect(getByText(row.email)).toBeInTheDocument();
    });
  });
});

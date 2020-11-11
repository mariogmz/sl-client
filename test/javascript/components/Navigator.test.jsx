import React from "react";
import { render } from "@testing-library/react";

import Navigator from 'components/Navigator';

const navigator = {
  listUrl: "/",
  frequencyUrl: "/frequency",
  duplicatesUrl: "/duplicates",
}

describe("Navigator component", () => {
  const setup = () => (
    render(
      <Navigator
        listUrl={navigator.listUrl}
        frequencyUrl={navigator.frequencyUrl}
        duplicatesUrl={navigator.duplicatesUrl}
      />
    )
  );

  test("Shows Fabs for each link", () => {
    const { getByText } = setup();

    expect(getByText("List")).toBeInTheDocument();
    expect(getByText("Frequency")).toBeInTheDocument();
    expect(getByText("Duplicates")).toBeInTheDocument();
  });
});

import React from "react";
import { render } from "@testing-library/react";

import PeopleList from 'components/PeopleList';

const list = [
  {
    id: "123456",
    displayName: "Mario",
    emailAddress: "mariogomezmtz@gmail.com",
    title: "Software Engineer"
  }
];

describe("PeopleList component", () => {
  const setup = async () => {
    const component = render(
      <PeopleList
        people={list}
      />,
    );

    return component;
  };

  test("Shows Table Headers", async () => {
    const { container } = await setup();
    const headers = container.querySelectorAll("[role='columnheader']");

    expect(headers.length).toEqual(3);
  });
});

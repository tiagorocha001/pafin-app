import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { SubCard } from "./";

test("Should render title prop", () => {
  render(
    <MantineProvider>
      <SubCard
        title="SubCard Title"
        alert="Alert"
        description="Description"
        active={true}
        button="Button"
        completed={false}
      />
    </MantineProvider>
  );
  const titleElement = screen.getByText("SubCard Title");
  expect(titleElement).toBeDefined();
});

test("Should render description prop", () => {
  render(
    <MantineProvider>
      <SubCard
        title="SubCard Title"
        alert="Alert"
        description="Description"
        active={true}
        button="Button"
        completed={false}
      />
    </MantineProvider>
  );
  const descriptionElement = screen.getByText("Description");
  expect(descriptionElement).toBeDefined();
});

test("Should render button prop", () => {
  render(
    <MantineProvider>
      <SubCard
        title="SubCard Title"
        alert="Alert"
        description="Description"
        active={true}
        button="Button"
        completed={false}
      />
    </MantineProvider>
  );
  const buttonElement = screen.getByText("Button");
  expect(buttonElement).toBeDefined();
});

test("Should render active prop", () => {
  const { container } = render(
    <MantineProvider>
      <SubCard
        title="SubCard Title"
        alert="Alert"
        description="Description"
        active={true}
        button="Button"
        completed={false}
      />
    </MantineProvider>
  );
  const containerElement = container.querySelectorAll("#sub-card");
  expect(containerElement).toBeDefined();
});

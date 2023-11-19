import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { Card, CardProps } from "./";

const renderCard = (props: Partial<CardProps> = {}) => {
  const defaultProps: CardProps = {
   title: "Test Title",
   description: "Test Description",
   progress: 50,
   type: "user",
   expanded: false,
   subCardsData: [],
   ...props,
  };
 
  return render(
   <MantineProvider>
     <Card {...defaultProps} />
   </MantineProvider>
  );
 };

 test("renders title and description", () => {
  renderCard();
  expect(screen.getByText("Test Title")).toBeDefined();
  expect(screen.getByText("Test Description")).toBeDefined();
 });

 test("renders correct icon based on type", () => {
  const { container } = renderCard({ type: "user" });
  expect(container.querySelector("UserCircleGear")).toBeDefined();
 
  const { container: container2 } = renderCard({ type: "config" });
  expect(container2.querySelector("Gear")).toBeDefined();
 
  const { container: container3 } = renderCard({ type: "todo" });
  expect(container3.querySelector("ListChecks")).toBeDefined();
 });

 
 test("renders correct number of SubCard components", () => {
  const subCardsData = [
    { title: "SubCard 1", alert: "Alert 1", description: "Description 1", active: true, button: "Button 1", completed: false },
    { title: "SubCard 2", alert: "Alert 2", description: "Description 2", active: true, button: "Button 2", completed: false },
  ];
  const { container } = renderCard({ subCardsData });
  expect(container.querySelectorAll("#sub-card")).toHaveLength(2);
 });
 
 
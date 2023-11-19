import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Alert } from "./";

test("Should render title prop", () => {
 render(<Alert title="Alert Title" description="Alert Description" />);
 const titleElement = screen.getByText("Alert Title");
 expect(titleElement).toBeDefined();
});

test("Should render description prop", () => {
 render(<Alert title="Alert Title" description="Alert Description" />);
 const descriptionElement = screen.getByText("Alert Description");
 expect(descriptionElement).toBeDefined();
});

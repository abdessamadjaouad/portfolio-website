import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import HomePage from "./page";

describe("HomePage", () => {
  it("renders the approved identity and role order", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Abdessamad Jaouad",
      }),
    ).toBeDefined();
    expect(screen.getByText("Data Engineer · Software Engineer")).toBeDefined();
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import DesignLabPage from "./page";

describe("DesignLabPage", () => {
  it("compares three directions and shows the approved foundation", () => {
    render(<DesignLabPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Systems Atlas Design Lab",
      }),
    ).toBeDefined();

    expect(
      screen.getByRole("heading", { level: 2, name: "Signal Ledger" }),
    ).toBeDefined();
    expect(
      screen.getByRole("heading", { level: 2, name: "Field Notes" }),
    ).toBeDefined();
    expect(
      screen.getByRole("heading", { level: 2, name: "Modular Current" }),
    ).toBeDefined();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Signal Ledger Foundations",
      }),
    ).toBeDefined();

    expect(
      screen.getAllByText(
        "I build reliable data platforms and production software, from raw data to useful products.",
      ),
    ).toHaveLength(3);
    expect(screen.getAllByText("40%")).toHaveLength(4);
    expect(
      screen.getAllByRole("link", { name: "Email Abdessamad" }),
    ).toHaveLength(4);
    expect(
      screen.getAllByRole("textbox", { name: "Evidence filter sample" }),
    ).toHaveLength(3);
  });
});

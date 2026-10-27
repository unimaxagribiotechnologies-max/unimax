import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import App from "@/App";

describe("React app routing", () => {
  it("renders the home page", () => {
    window.history.pushState({}, "", "/");
    render(<App />);
    expect(screen.getByText("Science that grows")).toBeInTheDocument();
  });
});

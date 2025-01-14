import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BlogCard } from "./blog-card";

describe("BlogCard component", () => {
  it("renders correct content", () => {
    render(<BlogCard />);

    expect(
      screen.getByText("Top 5 Living Room Inspirations"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Curated vibrants colors for your living, make it pop & calm in the same time.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Read more")).toBeInTheDocument();

    const img = screen.getByAltText("Space Joy Image From Unsplash");

    expect(img).toBeInTheDocument();
  });

  it("renders tag correctly", () => {
    render(<BlogCard />);

    screen.debug();

    const tag = screen.getByText("Interior");

    expect(tag).toBeInTheDocument();
  });
});

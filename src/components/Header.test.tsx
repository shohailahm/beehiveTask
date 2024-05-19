// Header.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("renders correctly", () => {
    const { getByAltText, container } = render(<Header />);

    // Check if the first ImageComponent with the correct src and alt text is present
    const firstImg = getByAltText("First image description");
    expect(firstImg).toBeInTheDocument();
    expect(firstImg).toHaveAttribute(
      "src",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2e3089818761c781925069837031bbc203e794b0e514f3a2a54453e713c6880b?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&"
    );
    expect(firstImg).toHaveClass(
      "shrink-0 self-start max-w-full aspect-[3.13] w-[125px]"
    );

    // Check if the second ImageComponent with the correct src and alt text is present
    const secondImg = getByAltText("Second image description");
    expect(secondImg).toBeInTheDocument();
    expect(secondImg).toHaveAttribute(
      "src",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b07874e3152904f2e09fbb66b7e408cee292eb60774649801e1697af9aea4eb7?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&"
    );
    expect(secondImg).toHaveClass(
      "shrink-0 rounded border border-yellow-500 border-solid shadow-sm aspect-square w-[42px]"
    );

    // Check for the main section and its classes
    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
    expect(section).toHaveClass(
      "flex justify-center items-center px-16 py-6 bg-white max-md:px-5"
    );

    // Check for the div inside the section and its classes
    const div = container.querySelector("div");
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(
      "flex gap-5 justify-between w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full"
    );
  });
});

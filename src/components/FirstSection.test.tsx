// FirstSection.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FirstSection from "./FirstSection";
import man from "../assets/man.png";
import bg from "../assets/background.png";

// vi.mock("../assets/man.png", () => ({
//   __esModule: true,
//   default: () => man,
// }));
// vi.mock("../assets/background.png", () => ({
//   default: () => bg,
// }));
vi.mock("./ImageComponent", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    className,
  }: {
    src: string;
    alt: string;
    className: string;
  }) => <img src={src} alt={alt} className={className} />,
}));

describe("FirstSection", () => {
  it("renders correctly", () => {
    const { getByText, getByAltText, container } = render(<FirstSection />);

    // Check if the text content is present
    expect(
      getByText(/Host your meeting with world-class amenities. Starting at/i)
    ).toBeInTheDocument();
    expect(getByText(/₹199\/-/i)).toBeInTheDocument();

    // Check if the ImageComponent with the correct src and alt text is present
    const imgElement = getByAltText("man standing");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", "/src/assets/man.png");

    // Check if the background image is applied correctly
    const backgroundDiv = container.querySelector(
      'div[style*="background-image"]'
    );
    expect(backgroundDiv).toHaveStyle(
      `background-image: url("/src/assets/background.png")`
    );

    // Additional checks for CSS classes
    expect(backgroundDiv).toHaveClass(
      "w-4/5 h-4/5 mt-12 ml-8 text-6xl font-bold tracking-tighter text-yellow-500 max-w-[500px] max-md:text-4xl"
    );
    expect(container.firstChild).toHaveClass(
      "flex flex-col-reverse md:flex-row md:justify-between items-center my-6 md:h-96 w-full"
    );
  });
});

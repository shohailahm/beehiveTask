// LocationCard.test.tsx
import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import LocationCard, { LocationCardProps } from "./LocationCard";
import ImageComponent from "./ImageComponent";

// Mock ImageComponent to avoid actual image loading during tests
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

const defaultProps: LocationCardProps = {
  location: "Test Location",
  workspaceImageSrc: "workspace.png",
  categoryImageSrc: "category.png",
  discountText: "20% Discount",
  discountObj: {
    "1": { value: 20 },
    "10": { value: 15 },
  },
  mainImgSrc: "main.png",
  day_pass_price: 100,
};

describe("LocationCard", () => {
  it("renders correctly", () => {
    const { getByText, getByAltText, container } = render(
      <LocationCard {...defaultProps} />
    );

    // Check if the location text is rendered
    expect(getByText("Test Location")).toBeInTheDocument();

    // Check if the workspace icon image is rendered correctly
    const workspaceIcon = getByAltText("Workspace icon");
    expect(workspaceIcon).toBeInTheDocument();
    expect(workspaceIcon).toHaveAttribute(
      "src",
      expect.stringContaining(
        "TEMP/ef05460e7f2d0519fbe300a4b56e34a55d2b138df115583dc8ba5b082cca6250"
      )
    );

    // Check if the discount text is rendered
    expect(container.querySelector(".bg-gray-800")).toHaveTextContent(
      "20% Discount"
    );

    // Check if the price data is rendered correctly
    expect(getByText("Day Pass")).toBeInTheDocument();
    expect(getByText("₹ 80")).toBeInTheDocument(); // 20% off on 100
    expect(getByText("/ Day")).toBeInTheDocument();

    expect(getByText("Bulk Pass")).toBeInTheDocument();
    expect(getByText("₹ 985")).toBeInTheDocument(); // 15% off on 1000
    expect(getByText("/ 10 Days")).toBeInTheDocument();
  });
});

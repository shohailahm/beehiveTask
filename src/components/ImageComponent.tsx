import { ReactElement } from "react";

type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

/**
 * Functional component for displaying an image.
 * @param {string} src - Source URL of the image.
 * @param {string} alt - Alt text for the image.
 * @param {string} className - CSS classes for the image.
 * @returns {JSX.Element} The Image component.
 */
const ImageComponent: React.FC<ImageProps> = ({
  src,
  alt,
  className,
}): ReactElement => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

export default ImageComponent;

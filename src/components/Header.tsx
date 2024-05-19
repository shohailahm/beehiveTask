import * as React from "react";

interface ImageComponentProps {
  src: string;
  alt: string;
  className: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  className,
}) => <img loading="lazy" src={src} alt={alt} className={className} />;

function Header() {
  return (
    <section className="flex justify-center items-center px-16 py-6 bg-white max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e3089818761c781925069837031bbc203e794b0e514f3a2a54453e713c6880b?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&"
          alt="First image description"
          className="shrink-0 self-start max-w-full aspect-[3.13] w-[125px]"
        />
        <ImageComponent
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b07874e3152904f2e09fbb66b7e408cee292eb60774649801e1697af9aea4eb7?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&"
          alt="Second image description"
          className="shrink-0 rounded border border-yellow-500 border-solid shadow-sm aspect-square w-[42px]"
        />
      </div>
    </section>
  );
}

export default Header;

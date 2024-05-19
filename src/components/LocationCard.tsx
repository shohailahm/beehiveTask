import { useState, useEffect } from "react";
import { DayPassDiscountsPercentage } from "../stores/workSpaceData.types";
import ImageComponent from "./ImageComponent";

export type LocationCardProps = {
  location: string;
  workspaceImageSrc?: string;
  categoryImageSrc?: string;
  discountText?: string;
  discountObj: { [key: string]: DayPassDiscountsPercentage };
  mainImgSrc: string;
  day_pass_price: number;
};

type PriceData = {
  type: string;
  price: number;
  duration: string;
};

function getImgUrl(name: string) {
  return new URL(`${name}`, import.meta.url).href;
}
/**
 * Functional component for displaying location cards.
 * @param {string} location - The location name.
 * @param {string} mainImageComponentSrc - Source URL of the main ImageComponent.
 * @param {string} mainImageComponentAlt - Alt text for the main ImageC.
 * @param {string} iconSrc - Source URL of the icon ImageC.
 * @param {string} iconAlt - Alt text for the icon ImageC.
 * @param {string} passType1 - Type of the first pass.
 * @param {string} price1 - Price of the first pass.
 * @param {string} passType2 - Type of the second pass.
 * @param {string} price2 - Price of the second pass.
 * @returns {JSX.Element} The LocationCard component.
 */
const LocationCard: React.FC<LocationCardProps> = ({
  location,
  discountObj,
  day_pass_price,
  mainImgSrc,
}) => {
  const [priceData, setpriceData] = useState<PriceData[]>([]);

  useEffect(() => {
    const arr = [] as unknown as PriceData[];
    for (const dur in discountObj) {
      const obj = {} as unknown as PriceData;
      const curObj = discountObj[dur];
      obj.type = dur === "1" ? "Day Pass" : "Bulk Pass";
      obj.price = Math.round(
        Number(dur) * day_pass_price - (day_pass_price * curObj.value) / 100
      );
      obj.duration = dur === "1" ? "Day" : "10 Days";
      arr.push(obj);
    }
    setpriceData(arr);
  }, [day_pass_price, discountObj]);

  return (
    <section className="flex flex-col py-3.5 bg-white rounded-lg border border-solid shadow-sm border-stone-200 border-opacity-80 max-w-[370px]">
      <header className="flex z-10 flex-col px-3 w-full font-medium">
        <div className="flex gap-5 justify-between text-xl font-semibold text-gray-800">
          <h2 className="my-auto truncate">{location}</h2>
          {/* <ImageComponent
            src={workspaceImageSrc}
            alt=""
            className="shrink-0 rounded-md border-0 border-solid aspect-square border-stone-200 w-[52px]"
          /> */}
        </div>
        <div className="flex overflow-hidden relative flex-col items-start pt-2 pb-20 mt-4 w-full text-sm text-yellow-500 whitespace-nowrap aspect-[1.71] tracking-[2px]">
          <ImageComponent
            src={getImgUrl(`../${mainImgSrc}`)}
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-2 justify-center p-2 mb-12 rounded-md border border-solid shadow-sm border-yellow-500 border-opacity-50">
            <ImageComponent
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef05460e7f2d0519fbe300a4b56e34a55d2b138df115583dc8ba5b082cca6250?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&"
              alt="Workspace icon"
              className="shrink-0 my-auto w-3 aspect-square"
            />
            <p>Workspace</p>
          </div>
        </div>
        <div className="justify-center self-end px-2.5 py-1.5 mt-2 mr-12 text-xs bg-gray-800 rounded border border-gray-800 border-solid text-stone-50">
          20% Discount
        </div>
      </header>
      <div className="flex gap-3 self-center -mt-2">
        {priceData?.map((priceItem, index) => (
          <div
            key={index}
            className={`flex flex-1 gap-5 justify-between px-2.5 py-3 rounded-md border border-solid ${
              priceItem.type === "Day Pass"
                ? "bg-stone-50 border-stone-200"
                : "bg-amber-300 border-amber-400"
            }`}
          >
            <div className="flex flex-col font-medium">
              <p className="text-sm text-stone-600">{priceItem.type}</p>
              <div className="mt-3 text-2xl text-gray-800 text-opacity-80">
                <span className="text-xl font-semibold">
                  ₹ {priceItem.price}
                </span>{" "}
                <span className="text-xs text-gray-800">
                  / {priceItem.duration}
                </span>
              </div>
            </div>
            <div className="flex gap-0 my-auto">
              <ImageComponent
                src={
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/e9de1d3f53f65e5ef07de4dc601402f0dbe5e1680dc6c90cb44cb91ceeee79b4?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&"
                }
                alt=""
                className="shrink-0 aspect-[0.58] fill-gray-800 w-[7px]"
              />
              <ImageComponent
                src={
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/e9de1d3f53f65e5ef07de4dc601402f0dbe5e1680dc6c90cb44cb91ceeee79b4?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&"
                }
                alt=""
                className="shrink-0 aspect-[0.58] fill-gray-800 w-[7px]"
              />
              <ImageComponent
                src={
                  "https://cdn.builder.io/api/v1/image/assets/TEMP/e9de1d3f53f65e5ef07de4dc601402f0dbe5e1680dc6c90cb44cb91ceeee79b4?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&"
                }
                alt=""
                className="shrink-0 aspect-[0.58] fill-gray-800 w-[7px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationCard;

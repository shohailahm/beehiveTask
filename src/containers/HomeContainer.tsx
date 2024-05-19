import * as React from "react";
import ImageComponent from "../components/ImageComponent";
import LocationCard from "../components/LocationCard";
import FirstSection from "../components/FirstSection";
import useWorkSpaceStore from "../stores/workspaceStores";
import data from "../data.json";
import { IWorkSpaceResponse } from "../stores/workSpaceData.types";

const features = [
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7adea14e11247eb9c17f51be6ac935dfc5062f1c1a60fc2bf0a89ab48b96098c?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&",
    iconAlt: "Community Events Icon",
    text: "Community Events",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7a0e53ea28d6f73ad562e9c58085a70479b27d30940338c411a95dd9b4d9c0be?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&",
    iconAlt: "Gym Facilities Icon",
    text: "Gym Facilities",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c800995966e26f7394f78cb5a23dd4b0873e8135f3d5138a627ca038aaff8a35?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&",
    iconAlt: "Highspeed Wifi Icon",
    text: "Highspeed Wifi",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/aa00b1bdd628e3cda5c3fb5e8a7a1ecc89211343045bdfd4d1ed3e728902078a?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&",
    iconAlt: "Cafe & Tea Bar Icon",
    text: "Cafe & Tea Bar",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ddcbb1d41aace1cf1800aec7ee83db6fa4ee1d447a42c082d7a159b6fa65784e?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&",
    iconAlt: "Affordable Icon",
    text: "Affordable",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a2072f01b0c0f5751387e814370855dc90da20ebe8337f56dfdbd1d35fa98e55?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&",
    iconAlt: "Comfort Lounges Icon",
    text: "Comfort Lounges",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/96221e86c546b530951a7663a27e6ab3067eb7ef178883f842876fda6fda7d05?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&",
    iconAlt: "Quick Booking Icon",
    text: "Quick Booking",
  },
  {
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/aacf83bab67fa9d71a488b2c4eb60762abde0063e6607fdfda81db7d83bc923a?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&",
    iconAlt: "Sports Area Icon",
    text: "Sports Area",
  },
];

const callApi = async (): Promise<IWorkSpaceResponse[]> => {
  return new Promise((resolve) => {
    // @ts-expect-error Promise error
    resolve(data);
  });
};

/**
 * Main functional component.
 * @returns {JSX.Element} The main component.
 */
const HomeContainer: React.FC = () => {
  const { addWorkSpaces, workSpaces: locations } = useWorkSpaceStore();

  React.useEffect(() => {
    const handleApi = async () => {
      const response = await callApi();
      if (response) {
        addWorkSpaces(response);
      }
    };
    handleApi();
  }, []);

  return (
    <main className="flex flex-col bg-slate-50">
      <FirstSection />
      <section className="flex flex-col  px-5 mt-11 md:ml-24 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
        <h2 className="text-4xl text-left md:mr-20 font-bold tracking-wide text-gray-800 max-md:max-w-full">
          Why Choose Us?
        </h2>
        <div className="mt-16 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <div className="md:ml-20 flex gap-5 max-md:flex-col max-md:gap-0 justify-center items-center">
            <div className="max-md:max-w-full">
              <div className=" grid grid-cols-2 md:grid-cols-4 md:justify-center md:gap-16 gap-6 md:max-w-full">
                {features.map(({ iconSrc, iconAlt, text }) => (
                  <div className="flex flex-col md:flex-row gap-2 bg-white rounded-md shadow-sm">
                    <img
                      loading="lazy"
                      src={iconSrc}
                      alt={iconAlt}
                      className="self-center w-7 aspect-square"
                    />
                    <div className="mt-3.5 text-center text-black">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-11 max-md:mt-10 max-md:max-w-3/4 ml-6">
        <h2 className="md:text-4xl mb-2 md:ml-28 text-3xl text-left  text-black">
          Our Spaces Overview
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 col-span-2 justify-items-center gap-2 gap-y-8">
          {locations?.map((location) => (
            <LocationCard
              key={location.id}
              location={location.address}
              mainImgSrc={location.images[0]}
              discountObj={location.day_pass_discounts_percentage}
              day_pass_price={location.day_pass_price}
            />
          ))}
        </div>
      </section>

      <section className="flex md:flex-row flex-col overflow-hidden md:justify-around relative  pt-11 mt-20 w-full min-h-[513px] max-md:mt-10 max-md:max-w-full">
        <h2 className="relative self-start ml-12 text-4xl font-bold leading-7 text-zinc-600 max-md:ml-2.5">
          Download our app now
        </h2>
        <div className="flex flex-col md:flex-row">
          <ImageComponent
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90ec92100f4cf1ebcaac92f3b841c2562add3dca9b022cac58a7949cccc839b8?apiKey=d67dfa10fc3b4c988ba1c8dc19f3b48f&"
            alt="App download banner image"
            className="md:object-cover  md:absolute md:inset-0 md:size-full text-center"
          />

          <section className="flex relative flex-col pt-20 pr-10 pb-7 pl-20 mt-44 bg-transparent rounded-2xl border border-solid shadow-sm border-stone-200 border-opacity-80 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <p className="self-end text-xl font-medium leading-7 text-zinc-600 w-[586px] max-md:max-w-full">
              Boost your productivity with the BHIVE Workspace app. Elevate your
              workspace, collaborate efficiently, and unlock exclusive perks.
            </p>
          </section>
        </div>
      </section>
      <footer className="justify-center items-center px-16 py-4 mt-10 w-full text-sm leading-5 bg-gray-800 text-zinc-300 max-md:px-5 max-md:max-w-full">
        &copy; Copyright 2024. Bhive Private Limited
      </footer>
    </main>
  );
};

export default HomeContainer;

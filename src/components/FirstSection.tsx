import man from "../assets/man.png";
import bg from "../assets/background.png";
import ImageComponent from "./ImageComponent";

function FirstSection() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between items-center my-6 md:h-96 w-full">
      <div
        style={{ backgroundImage: `url("${bg}")` }}
        className="w-4/5 h-4/5 mt-12 ml-8 text-6xl font-bold tracking-tighter text-yellow-500 max-w-[500px] max-md:text-4xl"
      >
        Host your meeting with world-class amenities. Starting at{" "}
        <span className="text-yellow-500">₹199/-!</span>
      </div>
      <div className="flex items-center justify-center w-3/5">
        <ImageComponent src={man} alt={"man standing"} className=" mr-6 mb-6" />
      </div>
    </div>
  );
}

export default FirstSection;

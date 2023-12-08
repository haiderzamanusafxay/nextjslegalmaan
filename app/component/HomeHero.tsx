import yammanpic from "../images/legalmaan yamman.png";
import Image from "next/image";
export const HomeHero = () => {
  return (
    <>
      <div className="container mx-auto flex px-5 py-24 lg:max-w-screen-xl md:flex-row flex-col items-center justify-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font  lg:text-6xl font-bold mb-5 text-gray-600">
            Hey, I'm Yamman
          </h1>
          <p className="mb-8 leading-relaxed lg:text-xl sm:text-5xl text-gray-600">
            Legally Protect YOU and Your BUSINESS
          </p>
          <div className="flex justify-center">
            <a
              href=""
              className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none rounded-full text-lg"
            >
              Consult Now!
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="yammans image"
            src={yammanpic}
            priority={true}
          />
        </div>
      </div>
    </>
  );
};

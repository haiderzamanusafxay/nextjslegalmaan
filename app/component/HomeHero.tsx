import yammanpic from "../images/legalmaan yamman.png";
import Image from "next/image";
export const HomeHero = () => {
  return (
    <>
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Hey, I'm Yamman
            </h1>
            <h2 className="mt-8 text-2xl text-gray-800">
              Legally Protect YOU and Your BUSINESS
            </h2>
            {/* <p className="mt-8 text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur modi blanditiis dolores quasi eaque explicabo!
            </p> */}
            <form action="" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-full border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                />
              </div>

              <div>
                <button
                  type="button"
                  className="rounded-full bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Get Started!
                </button>
              </div>
            </form>
          </div>
          <div className="relative lg:-mr-8 lg:col-span-6">
            <Image
              className="aspect-[4/2] object-cover lg:aspect-[4/3] lg:h-[700px] lg:w-[500px] xl:aspect-[16/9] sm:h-[700px]"
              src={yammanpic}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

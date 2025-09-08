import { FiChevronsDown } from "react-icons/fi";

interface HeroSectionProps {
  header: string;
  paragraph: string;
  imgSrc: string;
}

export default function HeroSection({
  header,
  paragraph,
  imgSrc,
}: HeroSectionProps) {
  return (
    <>
      <section className="pt-5 flex flex-col md:pt-15 md:flex-row h-auto">
        <div className="flex px-10 flex-col items-center justify-center text-center md:w-[50%] [&>*]:my-2">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#6c9469]">
            {header}
          </h1>
          <p className="text-2xl text-gray-700 sm:text-3xl pb-1 max-w-md ">
            {paragraph}
          </p>
          <button className="bg-[#6c9469] px-15 py-3 rounded-3xl text-white text-lg cursor-pointer">
            Shop Now
          </button>
        </div>
        <div className="p-5 flex justify-center items-center md:w-[50%]">
          <div className="w-75 pt-5 h-auto md:w-100 lg:w-110 bg-transparent rounded-xl flex items-center justify-center font-semibold">
            <img
              src={imgSrc}
              alt="image of headphones"
              className="object-fill rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>
      <section className="py-15 flex justify-center items-center h-auto text-8xl lg:text-9xl lg:py-20">
        <FiChevronsDown className="cursor-pointer text-gray-700 animate-bounce" />
      </section>
    </>
  );
}

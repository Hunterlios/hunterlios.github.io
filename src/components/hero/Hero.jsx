import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen relative flex flex-col justify-end"
    >
      <Image
        src="/images/kapibara_2.jpg"
        width={1920}
        height={1080}
        priority={true}
        className="h-full md:h-[95%] w-full object-cover absolute bottom-0"
        alt=""
      />
      <div className="w-full h-full absolute top-0 bg-opacity-60 bg-gradient-to-tr from-black/70 from-30% to-transparent" />
      <div className="text-white z-10 space-y-4 text-center px-6 py-10 my-6 sm:text-left sm:w-3/4 lg:w-3/4 xl:w-7/12 sm:pl-16 sm:py-16 lg:pl-32 lg:py-16">
        <h1 className="text-2xl leading-tight sm:leading-tight sm:text-2xl lg:text-32px xl:text-36px font-medium">
          Welcome to our website dedicated to helping capybaras!
        </h1>
        <p className="text-base leading-tight sm:leading-tight sm:text-xl lg:text-26px font-thin">
          We are passionate about promoting the conservation of these amazing
          creatures and providing information on how you can make a difference.
          Our site offers a variety of resources, from tips on how to protect
          their natural habitat to ways to support organizations that work to
          protect capybaras. Join us in our mission to protect and preserve
          capybaras for future generations to enjoy.
        </p>
      </div>
    </div>
  );
};

export default Hero;

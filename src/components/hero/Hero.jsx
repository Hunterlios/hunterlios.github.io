import Navbar from "../navbar/Navbar";

const Hero = () => {
  return (
    <div className="h-full w-full">
      <Navbar />
      <div className="w-full h-full relative bg-[url('/images/kapibara_2.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="w-full h-full bg-opacity-60 bg-gradient-to-tr from-black/70 from-30% via-transparent to-transparent"></div>
        <div className="text-white absolute bottom-8 space-y-4 h-387px w-708px leading-tight pl-32 ">
          <h1 className="text-36px font-medium">
            Welcome to our website dedicated to helping capybaras!
          </h1>
          <p className="text-26px font-thin">
            We are passionate about promoting the conservation of these amazing
            creatures and providing information on how you can make a
            difference. Our site offers a variety of resources, from tips on how
            to protect their natural habitat to ways to support organizations
            that work to protect capybaras. Join us in our mission to protect
            and preserve capybaras for future generations to enjoy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

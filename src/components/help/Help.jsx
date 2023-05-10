import Image from "next/image";

const Help = () => {
  return (
    <div
      id="help"
      className="w-full h-4/5 relative flex flex-col justify-center items-center"
    >
      <Image
        src="/images/kapibara_3.jpg"
        width={1920}
        height={1080}
        priority={true}
        className="w-full h-[28rem] xl:h-[36rem] object-cover absolute"
        alt=""
      />
      <div className="w-full h-[28rem] xl:h-[36rem] absolute bg-opacity-60 bg-gradient-to-tr from-black/70 from-20% to-transparent" />
      <div className="text-white z-10 space-y-4 text-left w-9/12 lg:px-20">
        <h1 className="text-2xl leading-tight sm:leading-tight sm:text-2xl lg:text-32px xl:text-36px font-medium">
          How to help?
        </h1>
        <p className="font-thin text-base leading-tight sm:text-xl sm:leading-tight lg:text-2xl lg:leading-tight xl:text-32px xl:leading-tight">
          Please consider supporting the conservation of capybaras and their
          habitat by making a donation to a reputable organization. Your
          contribution can help fund research, education, and on-the-ground
          efforts to protect these amazing creatures. By supporting capybara
          conservation, you are helping to ensure the survival of one of the
          world&apos;s most fascinating and unique animals. Thank you for your
          support!
        </p>
      </div>
    </div>
  );
};

export default Help;

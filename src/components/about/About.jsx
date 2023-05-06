const About = () => {
  return (
    <div className="flex flex-col justify-center divide-y py-24 px-8 md:flex-row xl:py-44 sm:px-8 md:divide-y-0 md:divide-x items-center">
      <div className="sm:pr-8 space-y-4 pb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-32px font-medium">
          What is a capybara?
        </h1>
        <p className="font-thin text-base leading-tight sm:text-xl sm:leading-tight lg:text-2xl lg:leading-tight xl:text-32px xl:leading-tight">
          A capybara is a semi-aquatic mammal that is native to South America.
          It is the largest rodent in the world, with adults typically weighing
          between 35 and 66 kilograms (77 to 146 pounds). Capybaras are well
          adapted to their environment, with webbed feet that allow them to swim
          and dive for extended periods. They are herbivores, feeding primarily
          on grasses and aquatic plants. Capybaras are known for their sociable
          and gentle nature, often forming groups of up to 20 individuals. These
          fascinating creatures play an important role in their ecosystem and
          are a vital part of the food chain for many predators. Unfortunately,
          capybaras face many threats to their survival, including habitat loss
          and hunting. It is important that we take action to protect and
          preserve these unique and remarkable animals for generations to come.
        </p>
      </div>
      <div className="flex flex-col space-y-5 pt-10 px-8 md:block sm:pl-8 lg:pl-10 xl:px-12">
        <div className="flex justify-center">
          <img
            src="/images/kapibara.jpg"
            className="rounded-full w-36 sm:w-40 xl:w-64"
          />
        </div>

        <div className="space-y-5 text-center md:text-left">
          <div>
            <h2 className="font-medium text-lg sm:text-lg xl:text-24px">
              TYPE
            </h2>
            <p className="font-light text-base sm:text-base xl:text-20px">
              Mammals
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg sm:text-lg xl:text-24px">
              FOUND IN
            </h2>
            <p className="font-light text-base sm:text-base xl:text-20px">
              South America
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg sm:text-lg xl:text-24px">
              FACT
            </h2>
            <p className="font-light text-base sm:text-base xl:text-20px">
              Capybaras occasionally eat their own feces to obtain essential
              nutrients. This behavior is called coprophagy and is not uncommon
              in herbivorous animals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

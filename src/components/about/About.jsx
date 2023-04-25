const About = () => {
  return (
    <div className="flex pt-48 pb-48 pl-32 divide-x items-center">
      <div className="space-y-4 leading-tight pr-20">
        <h1 className="text-36px font-medium">What is a capybara?</h1>
        <p className="text-32px font-thin">
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
      <div className="space-y-5 pl-32 pr-32">
        <div className="w-64">
          <img
            src="/images/kapibara.jpg"
            alt="kapibara"
            className="rounded-full"
          />
        </div>

        <div className="text-24px w-full">
          <h2 className="font-medium">TYPE</h2>
          <p className="font-light">Mammals</p>
        </div>
        <div className="text-24px w-full">
          <h2 className="font-medium">FOUND IN</h2>
          <p className="font-light">South America</p>
        </div>
        <div className="text-24px w-full">
          <h2 className="font-medium">FACT</h2>
          <p className="font-light">
            Capybaras occasionally eat their own feces to obtain essential
            nutrients. This behavior is called coprophagy and is not uncommon in
            herbivorous animals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

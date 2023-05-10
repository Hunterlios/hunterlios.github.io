import ContactForm from "../contact-form/ContactForm";
import { BsFacebook } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="flex flex-col items-center pb-6">
      <div
        id="contact"
        className="flex flex-col justify-center space-y-5 pb-12 px-8 md:flex-row xl:py-44 sm:px-20 items-center"
      >
        <div className="space-y-4 w-full mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-32px font-medium">
            Contact us
          </h1>
          <p className="font-thin text-base leading-tight sm:text-xl sm:leading-tight lg:text-2xl lg:leading-tight xl:text-32px xl:leading-tight">
            Have a question or want to get in touch with us? We'd love to hear
            from you! Simply fill out the contact form on our website or write
            to us on Facebook and we'll get back to you as soon as possible.
          </p>
          <div className="flex items-center space-x-3 pt-2">
            <BsFacebook size={32} />
            <span className="font-thin text-base sm:text-lg lg:text-xl xl:text-2xl">
              happyCapybaras
            </span>
          </div>
        </div>
        <ContactForm />
      </div>
      <span className="font-thin text-sm md:text-base text-center">
        © 2023 HappyCapybara | All Rights Reserved
      </span>
    </div>
  );
};

export default Contact;

const ContactForm = () => {
  return (
    <form action="#" className="space-y-4 w-full flex flex-col md:pl-24">
      <div>
        <label htmlFor="name" className="text-sm text-black"></label>
        <input
          type="text"
          id="subject"
          className="p-3 w-full text-sm text-gray-900 bg-white rounded-md border border-black"
          placeholder="Name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="text-sm font-regular text-gray-900 dark:text-gray-300"
        ></label>
        <input
          type="email"
          id="email"
          className="p-3 w-full text-sm text-gray-900 bg-white rounded-md border border-black"
          placeholder="Email"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        ></label>
        <textarea
          id="message"
          rows="8"
          className="p-3 w-full text-sm text-gray-900 bg-white rounded-md border border-black"
          placeholder="Message"
        ></textarea>
      </div>
      <button className="w-32 h-10 text-white text-center font-thin bg-black rounded-md">
        submit
      </button>
    </form>
  );
};

export default ContactForm;

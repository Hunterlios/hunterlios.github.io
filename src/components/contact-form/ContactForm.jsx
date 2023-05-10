const ContactForm = () => {
  return (
    <form action="#" class="space-y-4 w-full flex flex-col md:pl-24">
      <div>
        <label for="name" class="text-sm text-black"></label>
        <input
          type="text"
          id="subject"
          class="p-3 w-full text-sm text-gray-900 bg-white rounded-md border border-black"
          placeholder="Name"
          required
        />
      </div>
      <div>
        <label
          for="email"
          class="text-sm font-regular text-gray-900 dark:text-gray-300"
        ></label>
        <input
          type="email"
          id="email"
          class="p-3 w-full text-sm text-gray-900 bg-white rounded-md border border-black"
          placeholder="Email"
          required
        />
      </div>
      <div class="sm:col-span-2">
        <label
          for="message"
          class="mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        ></label>
        <textarea
          id="message"
          rows="8"
          class="p-3 w-full text-sm text-gray-900 bg-white rounded-md border border-black"
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

// <div className="w-2/3 h-10 border-[1px] border-black pl-2 flex items-center text-contact_secondary ">
// <input type="text" placeholder="Name" />
// </div>
// <div className="w-2/3 h-10 border-[1px] border-black pl-2 flex items-center text-contact_secondary">
// <input type="text" placeholder="Email" />
// </div>
// <div className="w-2/3 h-60 border-[1px] border-black px-2 py-1 text-contact_secondary">
// <input type="text" placeholder="Message" className="w-full h-fit" />
// </div>

import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-zinc-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-5xl md:text-4xl tracking-wider uppercase text-amber-500 font-bold">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/8bf68a08-43ff-4308-ba47-d5803baf6258"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 border-amber-500 rounded-md text-white focus:outline-none bg-zinc-900"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 border-amber-500 rounded-md text-white focus:outline-none bg-zinc-900"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 border-amber-500 rounded-md text-white focus:outline-none bg-zinc-900"
            ></textarea>

            <button className="text-white border-2 border-amber-500 bg-black px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 hover:text-amber-500 hover:font-bold">
              Let&apos;s talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

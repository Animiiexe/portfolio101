import { useState } from "react";

const Contactform = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    await fetch(
      "https://docs.google.com/forms/u/0/d/1kXe6oW9SEQBK8VVkZWtDkPCayH8aHynSM5y1dctWEP8/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: data,
      }
    );

    setSubmitted(true);
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl rounded-xl p-8 border border-blue-600 relative overflow-hidden"
    >
      {/* Metallic sheen effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-700/20 to-transparent opacity-30 pointer-events-none"></div>
      
      <h2 className="text-center text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
        Contact Me
      </h2>
      
      <div className="space-y-6">
        <div className="relative group">
          <input
            type="text"
            className="w-full p-4 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-200 placeholder-gray-500 transition-all duration-200 group-hover:border-gray-600"
            placeholder="Your Name"
            name="entry.840928775"
            required
          />
          <div className="absolute inset-0 rounded-lg border-t border-gray-600/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="relative group">
          <input
            type="email"
            className="w-full p-4 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-200 placeholder-gray-500 transition-all duration-200 group-hover:border-gray-600"
            placeholder="Your Email"
            name="entry.1156843920"
            required
          />
          <div className="absolute inset-0 rounded-lg border-t border-gray-600/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="relative group">
          <textarea
            cols="30"
            rows="4"
            className="w-full p-4 bg-gray-800/80 border border-gray-700 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-gray-200 placeholder-gray-500 transition-all duration-200 group-hover:border-gray-600"
            placeholder="Write Message..."
            name="entry.1103157260"
          ></textarea>
          <div className="absolute inset-0 rounded-lg border-t border-gray-600/50 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <button
          className="w-full py-4 px-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 border border-gray-700 rounded-lg font-bold text-gray-200 hover:text-white shadow-lg hover:shadow-gray-800/50 transition-all duration-300 hover:from-gray-800 hover:to-gray-700 relative overflow-hidden group"
          type="submit"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            Send Message
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>

      {submitted && (
        <div className="mt-6 p-4 bg-gray-800/70 border border-green-900/50 rounded-lg backdrop-blur-sm animate-fade-in">
          <p className="text-green-400 text-center font-medium flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Message Sent Successfully!
          </p>
        </div>
      )}
    </form>
  );
};

export default Contactform;
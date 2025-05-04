import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User } from "lucide-react";

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
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text bg-gradient-to-r from-white to-blue-600">
                Can't Find What You Need?
              </h2>
              <p className="mb-6">
                If you're looking for specific guidance that isn't covered in
                our tutorials, our support team is ready to help.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/community"
                className="inline-block px-6 py-3 rounded-lg font-medium bg-blue-600 hover:bg-black text-white transition-all shadow-lg shadow-purple-500/20"
              >
                Contact Support
              </motion.a>
            </div>

            <motion.div
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -4px rgba(37, 99, 235, 0.3)",
              }}
              className="p-6 rounded-xl border border-blue-600 hover:border-blue-600/50 transition-all shadow-sm hover:shadow-lg"
            >
              <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-medium mb-4">Request a Tutorial</h3>
                <p className="text-sm mb-4">
                  Is there a specific topic you'd like us to cover in a future
                  tutorial? Let us know!
                </p>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <input
                      name="entry.840928775"
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <input
                      type="email"
                      required
                      name="entry.1156843920"
                      placeholder="Your email"
                      className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <textarea
                    name="entry.1103157260"
                    placeholder="Describe the tutorial you'd like to see"
                    rows={4}
                    className="w-full border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none "
                  ></textarea>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 rounded-lg font-medium  bg-blue-600 text-white hover:bg-black transition-all shadow-lg shadow-purple-500/20"
                  >
                    Submit Request
                  </motion.button>
                  {submitted && (
                    <div className="mt-6 p-4 bg-gray-800/70 border border-green-900/50 rounded-lg backdrop-blur-sm animate-fade-in">
                      <p className="text-green-400 text-center font-medium flex items-center justify-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Message Sent Successfully!
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactform;

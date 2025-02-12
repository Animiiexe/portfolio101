import { useState, useEffect } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const selectedTheme = localStorage.getItem("theme");
        if (selectedTheme) {
            document.documentElement.classList = [selectedTheme];
            setIsDarkMode(selectedTheme === "night");
        }
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("Sending...");

        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setStatus("Thank you for reaching out! I'll get back to you soon.");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("Failed to send. Please try again.");
        }
        setLoading(false);
    };

    return (
        <div
            className={`p-8 rounded-xl shadow-2xl max-w-lg mx-auto border ${
                isDarkMode ? "bg-gray-900 border-gray-800 text-white" : "bg-white border-gray-200 text-black"
            } transition-all duration-300`}
        >
            <h2 className="text-xl font-bold text-center mb-4">Let's Connect</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    autoComplete="off"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-lg focus:ring-2 focus:outline-none ${
                        isDarkMode
                            ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500"
                            : "bg-gray-100 border-gray-300 text-black placeholder-gray-600 focus:ring-blue-500"
                    }`}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    autoComplete= "off"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-lg focus:ring-2 focus:outline-none ${
                        isDarkMode
                            ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500"
                            : "bg-gray-100 border-gray-300 text-black placeholder-gray-600 focus:ring-blue-500"
                    }`}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className={`w-full p-3 rounded-lg focus:ring-2 focus:outline-none ${
                        isDarkMode
                            ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-500"
                            : "bg-gray-100 border-gray-300 text-black placeholder-gray-600 focus:ring-blue-500"
                    }`}
                ></textarea>
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full p-3 rounded-lg font-semibold transition-all duration-300 transform ${
                        loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
                    } ${
                        isDarkMode
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-black text-white hover:bg-gray-800"
                    }`}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
            {status && <p className="text-center mt-4 text-sm text-gray-400">{status}</p>}
        </div>
    );
};

export default ContactForm;

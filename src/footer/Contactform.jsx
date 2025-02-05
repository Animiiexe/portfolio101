import { useState, useEffect } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const selectedTheme = localStorage.getItem("theme");
        if (selectedTheme) {
            document.body.classList = [selectedTheme];
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
            // Simulate an API call (Replace with actual fetch request)
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setStatus("Thank you for reaching out! I'll get back to you soon.");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("Failed to send. Please try again.");
        }
        setLoading(false);
    };

    const isDarkMode = document.body.classList.contains("night");

    return (
        <div className={`${isDarkMode ? "bg-white text-black border-gray-800" : "bg-white text-black border-gray-200"} p-6 rounded-xl shadow-xl max-w-lg mx-auto border`}>
            <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-lg focus:ring-2 ${isDarkMode ? "bg-gray-900 border-gray-700 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-black placeholder-gray-600"}`}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded-lg focus:ring-2 ${isDarkMode ? "bg-gray-900 border-gray-700 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-black placeholder-gray-600"}`}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className={`w-full p-3 rounded-lg focus:ring-2 ${isDarkMode ? "bg-gray-900 border-gray-700 text-white placeholder-gray-400" : "bg-gray-100 border-gray-300 text-black placeholder-gray-600"}`}
                ></textarea>
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full p-3 rounded-lg font-semibold transition disabled:bg-gray-700 ${isDarkMode ? "bg-white text-black hover:bg-gray-300" : "bg-black text-white hover:bg-gray-800"}`}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
            {status && <p className="text-center mt-4 text-sm text-gray-400">{status}</p>}
        </div>
    );
};

export default ContactForm;

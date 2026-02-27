export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center px-6 py-12"
      style={{ backgroundImage: "url('/image/weather-bg.jpg')" }}
    >
    
      <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 mt-24 w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg mb-6">
          Do you have questions, suggestions, or feedback? We’d love to hear from you!
        </p>


        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

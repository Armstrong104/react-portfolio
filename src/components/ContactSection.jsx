export const ContactSection = () => {
  return (
    <section id="contact">
      <h2 className="text-3xl font-bold mb-4 relative inline-block after:content-[''] after:w-20 after:h-[3px] after:bg-[#C58940] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2">
        Contact Me
      </h2>
      <p className="text-lg mb-6">
        The journey of a thousand miles starts with just one step, so make your
        own today.
      </p>
      <form
        action="https://formspree.io/f/xjkvrorv"
        method="POST"
        className="flex flex-col max-w-xl mx-auto space-y-4"
      >
        <label htmlFor="name" className="text-left">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="p-2 border border-gray-300 rounded"
        />
        <label htmlFor="email" className="text-left">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="p-2 border border-gray-300 rounded"
        />
        <label htmlFor="message" className="text-left">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="p-2 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="inline-block bg-[#C58940] text-[#FAF8F1] px-4 py-2 rounded hover:bg-[#FAEAB1] hover:text-[#C58940] transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

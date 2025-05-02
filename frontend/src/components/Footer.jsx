const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700 py-16 px-10 mt-16 w-full">
      {/* Remove max-w-7xl to make sure it spans full width */}
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center text-sm md:text-base text-gray-400 space-y-8 md:space-y-0">
        
        {/* Left Section: Developer Info */}
        <div className="text-center md:text-left text-gray-300">
          <p className="text-lg font-semibold">
            Made with by{" "}
            <strong className="font-bold text-white">Aaditya</strong>
          </p>
        </div>

        {/* Middle Section: Social Links */}
        <div className="flex gap-8 items-center justify-center">
          <a
            href="https://github.com/razak571"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110 text-xl font-semibold"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/razakattar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-110 text-xl font-semibold"
          >
            LinkedIn
          </a>
        </div>

        {/* Right Section: Disclaimer */}
        <div className="text-center md:text-right text-xs text-gray-500 max-w-xs md:max-w-lg">
          <p className="font-light text-gray-400">
            This is a personal demo project, not a production-ready SaaS service. Reach out for inquiries.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

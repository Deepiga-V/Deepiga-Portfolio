export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-primary dark:text-blue-400 flex items-center gap-2">
              <span>Deepiga</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2">UI/UX Designer | Web Designer</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.linkedin.com/in/deepiga-v-05a25524b" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://github.com/Deepiga-V" target="_blank"  rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://www.behance.net/deepiga" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-behance text-xl"></i>
            </a>
            <a href="https://dribbble.com/Deepiga" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-dribbble text-xl"></i>
            </a>
            <a href="mailto:email@deepigavelmurugan.com" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-col items-center md:items-start">
            <a href="#home" className="text-xl font-bold text-primary dark:text-teal-400 flex items-center gap-2">
              <span>Deepiga</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2">UI/UX Designer | Web Designer</p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="https://www.linkedin.com/in/deepiga-v-05a25524b" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 hover:bg-primary dark:bg-gray-700 dark:hover:bg-teal-500 text-gray-600 hover:text-white dark:text-gray-300 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <i className="fab fa-linkedin text-lg"></i>
            </a>
            <a 
              href="https://github.com/Deepiga-V" 
              target="_blank"  
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 hover:bg-primary dark:bg-gray-700 dark:hover:bg-teal-500 text-gray-600 hover:text-white dark:text-gray-300 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <i className="fab fa-github text-lg"></i>
            </a>
            <a 
              href="https://www.behance.net/deepiga" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 hover:bg-primary dark:bg-gray-700 dark:hover:bg-teal-500 text-gray-600 hover:text-white dark:text-gray-300 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <i className="fab fa-behance text-lg"></i>
            </a>
            <a 
              href="https://dribbble.com/Deepiga" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 hover:bg-primary dark:bg-gray-700 dark:hover:bg-teal-500 text-gray-600 hover:text-white dark:text-gray-300 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <i className="fab fa-dribbble text-lg"></i>
            </a>
            <a 
              href="mailto:email@deepigavelmurugan.com" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300 hover:bg-primary dark:bg-gray-700 dark:hover:bg-teal-500 text-gray-600 hover:text-white dark:text-gray-300 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <i className="fas fa-envelope text-lg"></i>
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
}

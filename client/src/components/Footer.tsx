export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-primary dark:text-blue-400 flex items-center gap-2">
              <span>JD</span><span>John Doe</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Software Engineer & UX Designer</p>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300">
              <i className="fab fa-medium text-xl"></i>
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400">&copy; {currentYear} John Doe. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

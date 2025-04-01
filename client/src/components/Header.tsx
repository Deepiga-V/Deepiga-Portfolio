import { useState, useEffect } from 'react';
import { cn, scrollToSection } from '@/lib/utils';
import { useDarkMode } from '@/hooks/use-dark-mode';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'skills', label: 'Skills' },
  { href: 'projects', label: 'Projects' },
  { href: 'resume', label: 'Resume' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  // Completely separate the mobile menu toggle from dark mode toggle
  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default behavior
    e.stopPropagation(); // Prevent event bubbling
    console.log('Toggle menu clicked'); // Debug log
    setIsMenuOpen(prevState => {
      const newState = !prevState;
      console.log('Menu state changing to:', newState); // Debug log
      return newState;
    });
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 backdrop-blur-md transition-all duration-300",
      isScrolled ? "shadow-md py-2" : "shadow-sm py-4"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-xl font-bold text-primary dark:text-blue-400 flex items-center gap-2 transition-colors duration-300"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
          >
            <span className="text-2xl">JD</span>
            <span className="hidden sm:inline">John Doe</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <a 
                key={href}
                href={`#${href}`}
                className="nav-link text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
              >
                {label}
              </a>
            ))}
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Dark mode toggle clicked (desktop)');
                toggleDarkMode();
              }} 
              className="p-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300" 
              aria-label="Toggle dark mode"
              data-testid="dark-mode-toggle-desktop"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 transition-colors duration-300" 
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            data-testid="mobile-menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        id="mobile-menu"
        className={cn(
          "md:hidden bg-white dark:bg-gray-900 shadow-md absolute left-0 right-0 transition-all duration-300 ease-in-out",
          isMenuOpen ? "transform translate-y-0 opacity-100" : "transform -translate-y-full opacity-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navLinks.map(({ href, label }) => (
            <a 
              key={href}
              href={`#${href}`}
              className="mobile-nav-link text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 font-medium py-2 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(href);
              }}
            >
              {label}
            </a>
          ))}
          <div className="flex justify-between items-center py-2 mt-2 border-t border-gray-200 dark:border-gray-700">
            <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Dark mode toggle clicked (mobile)');
                toggleDarkMode();
              }}
              className="p-2 text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300" 
              aria-label="Toggle dark mode"
              data-testid="dark-mode-toggle-mobile"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

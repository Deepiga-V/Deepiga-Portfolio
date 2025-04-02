import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { scrollToSection } from '@/lib/utils';

export default function About() {
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLDivElement>();
  const [contentRef, isContentVisible] = useIntersectionObserver<HTMLDivElement>();
  const [imageRef, isImageVisible] = useIntersectionObserver<HTMLDivElement>();
  const [socialRef, isSocialVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 transform ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary dark:bg-teal-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
          <div 
            ref={imageRef}
            className={`relative flex justify-center transition-all duration-700 transform ${isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
                <div className="relative w-74 h-74 sm:w-80 sm:h-80">
                  {/* Background blob shape with animation */}
                  <div className="absolute bg-primary bg-opacity-20 dark:bg-teal-300 dark:bg-opacity-20 animate-pulse" 
                      style={{
                        top: '-10%',
                        left: '-10%',
                        right: '-10%',
                        bottom: '-10%',
                        borderRadius: '70% 50% 80% 40% / 70% 40% 80% 50%',
                        animation: 'morph 8s ease-in-out infinite'
                      }}>
                  </div>

                  {/* Image container with hexagon-like shape */}
                  <div 
                    className="absolute rounded-md overflow-hidden flex items-center justify-center" 
                    style={{
                      top: '1rem',
                      right: '1rem',
                      bottom: '1rem',
                      left: '1rem',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      border: '4px solid',
                      borderColor: 'white',
                      backgroundColor: 'white',
                    }}
                  >
                <img 
                  src="/images/DV logo (2).png" 
                  alt="DV Logo" 
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className={`text-center md:text-left transition-all duration-700 transform ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
      
            <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">A little more <span className="text-primary dark:text-teal-400">about me : )</span></h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed mx-auto md:mx-0 max-w-md">
              I design and code with a dash of magic and a whole lot of music. When I'm not casting spells to make designs user-friendly, you'll catch me vibing to a good tune or figuring out how to make pixels behave and code cooperate. My design wizardry? It's powered by creativity and a killer playlist!
            </p>
    
            
            <div className="flex justify-center md:justify-start">
              <a
                href="/images/Deepigauiux-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary hover:bg-teal-400 text-white font-medium rounded-md transition-colors duration-300 shadow-md hover:shadow-lg inline-flex items-center"
              >
                <span>Download Resume</span>
                <i className="fas fa-download ml-2"></i>
              </a>
            </div>
            
            <div 
              ref={socialRef}
              className={`flex space-x-6 mt-8 justify-center md:justify-start transition-all duration-700 transform ${isSocialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
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
      </div>
    </section>
  );
}
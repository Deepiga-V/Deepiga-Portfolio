import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { scrollToSection } from '@/lib/utils';

export default function About() {
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLDivElement>();
  const [contentRef, isContentVisible] = useIntersectionObserver<HTMLDivElement>();
  const [imageRef, isImageVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 transform ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className={`relative flex justify-center transition-all duration-700 transform ${isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 flex items-center justify-center p-6">
              <img 
                src="/images/DV logo (2).png" 
                alt="DV Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className={`transition-all duration-700 transform ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">A little more about me : )</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I design and code with a dash of magic and a whole lot of music. When I'm not casting spells to make designs user-friendly, you’ll catch me vibing to a good tune or figuring out how to make pixels behave and code cooperate. My design wizardry? It's powered by creativity and a killer playlist!
            </p>
    
            
            <button
              onClick={() => scrollToSection('resume')}
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <span>Download Resume</span>
              <i className="fas fa-download ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

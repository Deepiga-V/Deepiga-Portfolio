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
            className={`relative rounded-lg overflow-hidden shadow-lg transition-all duration-700 transform ${isImageVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="aspect-square bg-white dark:bg-gray-800 flex items-center justify-center p-4">
              <img 
                src="/images/DV logo (2).png" 
                alt="DV Logo" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="absolute inset-0 bg-primary bg-opacity-20 dark:bg-blue-500 dark:bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-bold">Passionate About Technology</span>
            </div>
          </div>
          
          <div 
            ref={contentRef}
            className={`transition-all duration-700 transform ${isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a dedicated software engineer with over 5 years of experience building responsive, 
              user-friendly web applications. My journey in tech began with a Computer Science degree, 
              but my passion for creating seamless user experiences has driven me to continuously expand 
              my skillset.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I specialize in front-end development with React, but I'm also well-versed in back-end 
              technologies. I believe in writing clean, maintainable code and staying up-to-date with 
              industry best practices.
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

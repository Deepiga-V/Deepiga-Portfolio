import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

type ProjectCategory = 'All' | 'App Designs' | 'Web Designs' | 'Front-End Designs' | 'Social Media Designs';

interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  imagePath: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Washie - Laundry Service App',
    category: 'App Designs',
    imagePath: '/images/1.png',
    technologies: ['Figma'],
    links: {
      live: 'https://www.behance.net/gallery/208991777/Washie-Laundry-Service-App'
    }
  },
  {
    id: 2,
    title: 'Plantora - Plant Shopping App',
    category: 'App Designs',
    imagePath: '/images/2.png',
    technologies: ['Figma'],
    links: {
      live: 'https://www.behance.net/gallery/214990791/Plantora-Plant-Shopping-App'
    }
  },
  {
    id: 3,
    title: 'Soul - Music Website',
    category: 'Web Designs',
    imagePath: '/images/3.png',
    technologies: ['Figma'],
    links: {
      live: 'https://www.behance.net/gallery/213455621/Soul-Music-Website'
    }
  },
  {
    id: 4,
    title: 'Furnique - Furniture Website',
    category: 'Web Designs',
    imagePath: '/images/4.png',
    technologies: ['Figma'],
    links: {
      live: 'https://www.behance.net/gallery/214210633/Furnique-Furniture-Website'
    }
  },
  {
    id: 5,
    title: 'Petal Palette - Flower Shop Website',
    category: 'Front-End Designs',
    imagePath: '/images/5.png',
    technologies: ['HTML','CSS'],
    links: {
      live: 'https://deepiga-v.github.io/Petal-Palette/'
    }
  },
  {
    id: 6,
    title: 'Café Aura - Coffee Shop Website',
    category: 'Front-End Designs',
    imagePath: '/images/6.png',
    technologies: ['HTML','CSS','JavaScript'],
    links: {
      live: 'https://deepiga-v.github.io/Cafe-Aura/'
    }
  },
  {
    id: 7,
    title: 'Instagram Post Designs',
    category: 'Social Media Designs',
    imagePath: '/images/7.png',
    technologies: ['Canva','Illustrator','Photoshop'],
    links: {
      live: 'https://www.fiverr.com/s/XLarR9Z'
    }
  },
  {
    id: 8,
    title: 'Instagram Story Designs',
    category: 'Social Media Designs',
    imagePath: '/images/8.png',
    technologies: ['Canva','Illustrator','Photoshop'],
    links: {
      live: 'https://www.fiverr.com/s/XLarR9Z'
    }
  }
];

const categories: ProjectCategory[] = ['All', 'App Designs', 'Web Designs', 'Front-End Designs', 'Social Media Designs'];

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
  
  return (
    <div 
      ref={ref}
      className={`project-card transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      data-category={project.category}
    >
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="project-image aspect-square overflow-hidden relative">
          <img 
            src={project.imagePath} 
            100t={project.title}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-70 dark:bg-teal-500 dark:bg-opacity-70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="flex space-x-4">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-100 p-2 rounded-full bg-black bg-opacity-30 transition-colors duration-300">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-100 p-2 rounded-full bg-black bg-opacity-30 transition-colors duration-300">
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{project.title}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => {
              let bgClass = '';
              let textClass = '';
              
              switch (tech.toLowerCase()) {
                case 'react':
                case 'canva':
                  bgClass = 'bg-blue-100 dark:bg-blue-900';
                  textClass = 'text-blue-600 dark:text-blue-300';
                  break;
                case 'node.js':
                case 'css':
                  bgClass = 'bg-green-100 dark:bg-green-900';
                  textClass = 'text-green-600 dark:text-green-300';
                  break;
                case 'redux':
                case 'figma':
                  bgClass = 'bg-purple-100 dark:bg-purple-900';
                  textClass = 'text-purple-600 dark:text-purple-300';
                  break;
                case 'mongodb':
                case 'illustrator':
                  bgClass = 'bg-yellow-100 dark:bg-yellow-900';
                  textClass = 'text-yellow-600 dark:text-yellow-300';
                  break;
                case 'html':
                  bgClass = 'bg-pink-100 dark:bg-pink-900';
                  textClass = 'text-pink-600 dark:text-pink-300';
                  break;
                case 'javascript':
                  bgClass = 'bg-indigo-100 dark:bg-indigo-900';
                  textClass = 'text-indigo-600 dark:text-indigo-300';
                  break;
                default:
                  bgClass = 'bg-gray-100 dark:bg-teal-800';
                  textClass = 'text-gray-600 dark:text-teal-300';
              }
              
              return (
                <span key={tech} className={`tech-pill px-3 py-1 text-xs font-medium ${bgClass} ${textClass} rounded-full`}>
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLDivElement>();
  const [filterRef, isFilterVisible] = useIntersectionObserver<HTMLDivElement>();
  const [buttonRef, isButtonVisible] = useIntersectionObserver<HTMLDivElement>();
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 transform ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Here's a selection of projects I've worked on. Each one presented unique challenges and learning opportunities.
          </p>
        </div>
        
        <div 
          ref={filterRef}
          className={`project-filter mb-12 flex flex-wrap justify-center gap-4 transition-all duration-700 transform ${isFilterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {categories.map((category) => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-btn px-5 py-2 rounded-full transition-colors duration-300 
                ${activeCategory === category 
                  ? 'bg-primary text-white dark:bg-blue-400 dark:text-gray-900' 
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900'}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div 
          ref={buttonRef}
          className={`text-center mt-12 transition-all duration-700 transform ${isButtonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          
        </div>
      </div>
    </section>
  );
}

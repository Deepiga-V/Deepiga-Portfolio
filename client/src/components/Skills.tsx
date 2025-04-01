import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface Skill {
  name: string;
  percentage: number;
}

const methods: Skill[] = [
  { name: 'User Research', percentage: 75 },
  { name: 'Wireframing', percentage: 90 },
  { name: 'Prototyping', percentage: 95 },
  { name: 'Design System', percentage: 85 }
];

const tools: Skill[] = [
  { name: 'Figma', percentage: 90 },
  { name: 'Illustrator', percentage: 85 },
  { name: 'Photoshop', percentage: 85 },
  { name: 'Canva', percentage: 95 }
];

const technicals: Skill[] = [
  { name: 'HTML', percentage: 80 },
  { name: 'CSS', percentage: 80 },
  { name: 'JavaScript', percentage: 30 },
];

function SkillBar({ skill, delay }: { skill: Skill, delay: number }) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
  
  return (
    <div className="skill-item" ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-primary dark:bg-blue-400 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: isVisible ? `${skill.percentage}%` : '0%', 
            transitionDelay: `${delay * 100}ms` 
          }}
        ></div>
      </div>
    </div>
  );
}

function SkillSection({ title, icon, skills }: { title: string, icon: string, skills: Skill[] }) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();
  
  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex items-center mb-4">
        <i className={`${icon} text-primary dark:text-teal-400 text-3xl mr-4`}></i>
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} delay={index} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLDivElement>();
  const [techRef, isTechVisible] = useIntersectionObserver<HTMLDivElement>();
  
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 transform ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary dark:bg-teal-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            I've worked with a variety of technologies throughout my career. Here's a snapshot of my technical capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillSection title="Methods" icon="fas fa-" skills={methods} />
          <SkillSection title="Tools" icon="fas fa-tools" skills={tools} />
          <SkillSection title="Technicals" icon="fas fa-code" skills={technicals} />
        </div>
        
        <div 
          ref={techRef}
          className={`mt-16 text-center transition-all duration-700 transform ${isTechVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
        </div>
      </div>
    </section>
  );
}

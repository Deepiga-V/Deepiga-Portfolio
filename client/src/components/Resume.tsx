import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

// Type guard function to check if an item is a CertificateItem
function isCertificateItem(item: any): item is CertificateItem {
  return 'issuer' in item && 'year' in item;
}

interface TimelineItem {
  title: string;
  period: string;
  organization: string;
  percentage: string;
}

interface CertificateItem {
  name: string;
  issuer: string;
  year: string;
}

interface LanguageItem {
  name: string;
  level: string;
}

const educationItems: TimelineItem[] = [
  {
    title: 'B.E Computer Science and Engineering',
    period: '2020-2024',
    organization: 'AAA College of Engineering and Technology',
    percentage: 'CGPA: 8.26'
  },
  {
    title: 'HSC',
    period: '2019-2020',
    organization: 'SBK Girls Higher Secondary School',
    percentage: '77%'
  },
  {
    title: 'SSLC',
    period: '2017-2018',
    organization: 'Kongu Vellalar Matriculation Higher Secondary School',
    percentage: '92%'
  }
];


const certifications: CertificateItem[] = [
  {
    name: 'UI/UX Designing',
    issuer: 'Tutedude',
    year: '2024'
  },
  {
    name: 'UX Research',
    issuer: 'Tutedude',
    year: '2024'
  },
  {
    name: 'Illustrator',
    issuer: 'Tutedude',
    year: '2024'
  },
  {
    name: 'Photoshop',
    issuer: 'Tutedude',
    year: '2024'
  },
];

const languages: LanguageItem[] = [
  {
    name: 'Tamil',
    level: 'Native'
  },
  {
    name: 'English',
    level: 'Fluent'
  },
];

function TimelineSection({ title, icon, items }: { title: string, icon: string, items: TimelineItem[] }) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="flex items-center mb-8">
        <i className={`${icon} text-primary dark:text-blue-400 text-3xl mr-4`}></i>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h3>
      </div>

      {items.map((item, index) => (
        <div key={index} className={`relative border-l-2 border-gray-200 dark:border-gray-700 pl-8 ${index < items.length - 1 ? 'pb-8' : ''}`}>
          <div className="absolute w-4 h-4 bg-primary dark:bg-blue-400 rounded-full -left-[9px] top-0"></div>
          <div className="mb-8">
            <div className="flex flex-wrap justify-between items-center mb-2">
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100">{item.title}</h4>
              <span className="text-sm text-white bg-primary dark:bg-blue-400 px-3 py-1 rounded-full">{item.period}</span>
            </div>
            <h5 className="text-lg text-gray-600 dark:text-gray-300 mb-2">{item.organization}</h5>
            <p className="text-gray-600 dark:text-gray-400">{item.percentage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function InfoCard({ title, items, icon, itemKey }: { 
  title: string; 
  items: CertificateItem[] | LanguageItem[]; 
  icon: string; 
  itemKey: 'name' | 'issuer' | 'year' | 'level'; 
}) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <div 
      ref={ref}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <i className={`${icon} text-primary dark:text-blue-400 mt-1 mr-3`}></i>
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-100">{item.name}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {itemKey === 'issuer' && isCertificateItem(item)
                  ? `${item.issuer}, ${item.year}` 
                  : item[itemKey as keyof typeof item]}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  const [titleRef, isTitleVisible] = useIntersectionObserver<HTMLDivElement>();

  return (
    <section id="resume" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 transform ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
          <div className="w-20 h-1 bg-primary dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            My professional journey and qualifications. Download the full resume for complete details.
          </p>
          <a 
            href="Deepigauiux-resume.pdf" 
            className="mt-6 inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-md transition-colors duration-300 shadow-md hover:shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download Full Resume</span>
            <i className="fas fa-download ml-2"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <TimelineSection 
            title="Education" 
            icon="fas fa-graduation-cap" 
            items={educationItems} 
          />
          
          <div className="space-y-8">
            <InfoCard 
              title="Certifications" 
              items={certifications} 
              icon="fas fa-certificate" 
              itemKey="issuer" 
            />
            
            <InfoCard 
              title="Languages" 
              items={languages} 
              icon="fas fa-language" 
              itemKey="level" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

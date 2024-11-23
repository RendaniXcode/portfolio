import Image from 'next/image';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'AWS Cloud Migration',
      description:
        'Led the transformation of a monolithic WordPress-based web application to a modernised AWS 3-tier application architecture.',
      technologies: ['AWS', 'CloudFront', 'WAF', 'WordPress'],
      achievements: [
        'Enhanced user experience by reducing load times from 2.3 to 0.9 minutes',
        'Implemented robust security measures',
        'Automated infrastructure configuration',
      ],
      image: '/static/aws-migration.jpg',
    },
    {
      title: 'DevSecOps Implementation',
      description:
        'Implemented comprehensive DevSecOps methodology for enterprise clients at Red Hat.',
      technologies: ['Kubernetes', 'Ansible', 'RHEL', 'Jenkins'],
      achievements: [
        'Reduced deployment time by 60%',
        'Enhanced security protocols',
        'Streamlined CI/CD pipeline',
      ],
      image: '/static/devsecops.jpg',
    },
    {
      title: 'Network Optimization',
      description:
        'Spearheaded network optimization project at Vodacom SA, improving overall network performance.',
      technologies: ['Network Architecture', 'Performance Tuning', 'Monitoring'],
      achievements: [
        'Achieved 30% reduction in network downtime',
        'Implemented proactive monitoring',
        'Enhanced problem resolution process',
      ],
      image: '/static/network-optimization.jpg',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of my key projects showcasing expertise in cloud architecture, DevOps, and enterprise solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

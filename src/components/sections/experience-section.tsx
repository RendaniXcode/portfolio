'use client';

import { useState } from 'react';

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const experiences = [
    {
      company: "Red Hat Inc EMEA",
      companyUrl: "https://www.redhat.com",
      role: "Senior Solutions Architect",
      description: "Leading technical solutions and strategic direction for enterprise clients",
      fullDescription: `• Strategised and optimised Red Hat solutions to meet customer needs, translating technical features into significant business value.
      • Led technical presentations and demos, showcasing Red Hat's portfolio benefits and aligning solutions with business strategies.
      • Mitigated architectural conflicts within accounts, ensuring smooth integration and adoption of Red Hat solutions.
      • Helped customers adopt DevSecOps methodology in their environment.
      • Managed the Technical Account Plan, steering strategic direction and accountability.`,
      technologies: ["Kubernetes", "Ansible", "RHEL"]
    },
    {
      company: "Amazon EMEA",
      companyUrl: "https://aws.amazon.com",
      role: "AWS Solutions Architect",
      description: "Optimized cloud solutions achieving significant cost savings and performance improvements",
      fullDescription: `• Utilised AWS's Well-Architected Framework to optimise performance, reliability, and costs.
      • Achieved an 8.3% cost cut, saving the client R500,000 annually.
      • Enhanced Athena query performance by 35% via S3 data restructuring.
      • Unified AWS partners and clients, focusing on cost efficiency and application reliability.
      • Led the 2022 "Architect Reliable Applications on AWS" workshop.`,
      technologies: ["AWS", "Cloud Architecture"]
    },
    {
      company: "Vodacom SA",
      companyUrl: "https://www.vodacom.co.za",
      role: "AWS Cloud Engineer",
      description: "Modernized infrastructure and improved application performance",
      fullDescription: `• Led the transformation of a monolithic WordPress-based web application to AWS 3-tier architecture.
      • Enhanced user experience by integrating CloudFront, reducing load times from 2.3 to 0.9 minutes.
      • Implemented security improvements with Amazon WAF and least privilege access principles.
      • Automated infrastructure configuration resulting in an 8-minute setup time (down from 4 hours).`,
      technologies: ["CloudFront", "WAF", "SES"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600">
            Over 10+ years of experience in technology leadership and architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
            >
              <a 
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-medium text-gray-900 mb-2 hover:text-blue-600 transition-colors"
              >
                {exp.company}
              </a>
              <div className="text-blue-600 font-medium mb-4">
                {exp.role}
              </div>
              <p className="text-gray-600 mb-4">
                {expandedId === index ? exp.fullDescription : exp.description}
              </p>
              <button
                onClick={() => setExpandedId(expandedId === index ? null : index)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4"
              >
                {expandedId === index ? 'Show less' : 'Read more'}
              </button>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import ExperienceSection from '@/components/sections/experience-section'
import EducationSection from '@/components/sections/education-section'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-medium text-gray-900 tracking-tight mb-6">
            Senior Solutions Architect{' '}
            <span className="text-blue-600">passionate about</span>{' '}
            building exceptional solutions.
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            With expertise in AWS, Red Hat, and enterprise architecture, I specialize in designing 
            and implementing scalable solutions that drive business value through technology innovation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#experience"
              className="px-8 py-3 rounded-full bg-gray-900 text-white font-medium 
                       hover:bg-gray-800 transform hover:scale-105 hover:shadow-lg 
                       transition-all duration-300 ease-in-out"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-white text-gray-900 font-medium 
                       border border-gray-200 hover:border-gray-300 hover:bg-gray-50 
                       transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <ExperienceSection />
      <EducationSection />
    </div>
  )
}
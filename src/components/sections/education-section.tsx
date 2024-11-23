export default function EducationSection() {
  const education = [
    {
      degree: "MPhil in Strategic Management",
      school: "University of Pretoria",
      date: "2024 - Present",
      description: "Advanced studies in Strategic Management, focusing on research methodology and strategic business applications.",
      courses: [
        "Advanced Concepts in Strategic Management",
        "Applied Strategic Management",
        "Strategic Management",
        "Research methodology",
        "Mini dissertation: Research Article"
      ]
    },
    {
      degree: "Postgraduate in Business Administration",
      school: "University of Johannesburg",
      date: "2022 - 2023",
      grade: "61%",
      description: "Comprehensive business education combining digital literacy, e-commerce, and financial analysis.",
      courses: [
        "Marketing strategy with digital integration",
        "E-commerce platform development",
        "Financial analysis of JSE-listed companies",
        "Sustainability and ethics framework development",
        "Global markets analysis focusing on Africa"
      ]
    },
    {
      degree: "Postgraduate Diploma in Digital Business",
      school: "MIT Sloan and Columbia Business School",
      date: "2021 - 2021",
      grade: "8.99/10",
      description: "Specialized program focusing on digital transformation and business innovation.",
      courses: [
        "Digital business and marketing strategies",
        "Digital Quotient leadership",
        "Digital operations optimization",
        "Innovation and experimentation in digital business models"
      ]
    },
    {
      degree: "National Diploma in Electrical Engineering",
      school: "Tshwane University of Technology",
      date: "2004 - 2006",
      description: "Technical foundation in electrical engineering with focus on practical applications.",
      courses: [
        "Design Project: Sustainable irrigation system (Score: 85%)",
        "Electronic Communication III",
        "Digital Systems III",
        "Microwave Communication III",
        "Mathematics III"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium text-gray-900 mb-4">
            Formal Education
          </h2>
          <p className="text-lg text-gray-600">
            A strong foundation in technical and business education
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {edu.degree}
                  </h3>
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-700">
                    {edu.school}
                  </a>
                </div>
                <div className="mt-2 md:mt-0 flex items-center gap-2">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                    {edu.date}
                  </span>
                  {edu.grade && (
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Grade: {edu.grade}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-50 text-gray-700 border border-gray-200"
                  >
                    {course}
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
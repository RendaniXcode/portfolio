'use client';

import Image from 'next/image'; // Import Image component

export default function PhotographyPage() {
  const photos = [
    {
      title: "Urban Landscape",
      category: "City",
      location: "Johannesburg",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Natural Beauty",
      category: "Nature",
      location: "Drakensberg",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Wildlife",
      category: "Nature",
      location: "Kruger National Park",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Street Photography",
      category: "Urban",
      location: "Cape Town",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Architecture",
      category: "Urban",
      location: "Pretoria",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Landscape",
      category: "Nature",
      location: "Table Mountain",
      image: "/api/placeholder/600/400"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-medium text-gray-900 mb-4">Photography</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Capturing moments and perspectives through my lens. A collection of urban, 
            nature, and architectural photography.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <Image 
                src={photo.image}
                alt={photo.title}
                width={600} // Provide width
                height={400} // Provide height
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-medium text-white mb-1">
                  {photo.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">
                    {photo.category}
                  </span>
                  <span className="text-sm text-gray-300">
                    {photo.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

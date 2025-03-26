// src/components/ServicesSection.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const [services, setServices] = useState([]);

  // A small array of pastel Tailwind-compatible classes or custom hex
  // We'll cycle through them for each service
  const pastelColors = [
    'bg-[#FCE7F3]', // pink pastel
    'bg-[#E7FCE8]', // green pastel
    'bg-[#E7F2FC]', // blue pastel
    'bg-[#FEF9E7]', // yellow pastel
    'bg-[#FDEEE7]'  // peach pastel
  ];

  useEffect(() => {
    fetch('http://localhost:4000/api/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => {
        console.error('Error fetching services:', err);
      });
  }, []);

  return (
    <section
      id="services"
      className="py-12 px-4 md:py-20 md:px-8 mt-10"
      style={{ backgroundColor: 'var(--color-background)' }}
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-left">
          Υπηρεσίες
        </h2>

        {services.length === 0 ? (
          <p className="text-gray-700">Φόρτωση υπηρεσιών...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => {
              // pick a color from the array, cycling through by index
              const bgColorClass =
                pastelColors[index % pastelColors.length];

              return (
                <div
                  key={service._id}
                  className={`${bgColorClass} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {service.name}
                  </h3>
                  <p className="text-gray-800 mb-4">
                    {service.description}
                  </p>
                  {service.price && (
                    <p className="font-medium text-black mb-4">
                      Τιμή: €{service.price}
                    </p>
                  )}

                  {/* Show More button with arrow icon */}
                  {/* We'll eventually link to a dedicated service page, e.g. `/services/${service._id}` */}
                  <button
                    className="flex items-center gap-2 text-primary font-semibold hover:underline"
                    // onClick or Link to the page 
                    // e.g., onClick={() => navigate(`/services/${service._id}`)}
                  >
                    <Link to={`/services/${service._id}`}>
                        <span>Περισσότερα</span>
                    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    </Link>
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;

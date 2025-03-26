// src/pages/ServiceDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ServiceDetails = () => {
  const { id } = useParams(); // get the service ID from the URL
  const navigate = useNavigate();
  
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:4000/api/services/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Service not found');
        }
        return res.json();
      })
      .then((data) => {
        setService(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Φόρτωση...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-red-500 mb-4">Σφάλμα: {error}</p>
        <button
          className="bg-primary text-background py-2 px-4 rounded"
          onClick={() => navigate('/')}
        >
          Επιστροφή στην αρχική
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--color-background)] px-4 py-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
        <p className="text-gray-700 mb-2">{service.description}</p>
        {service.price && (
          <p className="text-lg font-semibold mb-4">
            Τιμή: €{service.price}
          </p>
        )}
        {/* If you have more fields, display them here, e.g., duration, images, etc. */}
      </div>
    </main>
  );
};

export default ServiceDetails;

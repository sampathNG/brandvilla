import React, { useEffect, useState } from "react";
import axios from "axios";
const VisitingCard = () => {
  const [logos, setLogos] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/visitingcard"
        );
        setLogos(response.data.files);
        setCount(response.data.count);
        console.log(logos);
      } catch (error) {
        console.error("Error fetching logos:", error);
        setError("Failed to load logos.");
      } finally {
        setLoading(false);
      }
    };
    fetchLogos();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Visiting Cards</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={"http://localhost:5000" + logo}
              alt={`Logo ${index + 1}`}
              className="rounded shadow hover:shadow-lg transition-shadow duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default VisitingCard;

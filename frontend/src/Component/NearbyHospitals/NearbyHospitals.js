import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./NearbyHospitals.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// Fix Leaflet marker icon path issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const HospitalLocator = () => {
  const [userPosition, setUserPosition] = useState({ lat: 19.076, lng: 72.8777 }); // Default to Mumbai
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to format the address correctly
  const formatAddress = (address) => {
    if (!address) return "Address not available";
    
    const addressParts = [
      address.civil_parish,
      address.village,
      address.county,
      address.province,
      address.state,
      address.country,
    ];

    return addressParts.filter(Boolean).join(", ");
  };

  // Fetch hospitals based on location
  const fetchHospitals = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=hospital&limit=10&addressdetails=1&lat=${latitude}&lon=${longitude}&radius=5000`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch hospital data");
      }

      const data = await response.json();
      console.log("Hospitals Data:", data);

      // Filter and format the hospital data
      const hospitalData = data.map((hospital, index) => ({
        id: index + 1,
        name: hospital.display_name || "Unnamed Hospital",
        lat: parseFloat(hospital.lat),
        lon: parseFloat(hospital.lon),
        address: formatAddress(hospital.address),
        phone: `+91 ${9000000000 + index}`, // Mock phone numbers
      }));

      setHospitals(hospitalData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hospital data:", error);
    }
  };

  // Get user location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserPosition({ lat: latitude, lng: longitude });
          fetchHospitals(latitude, longitude);
        },
        () => {
          console.warn("Geolocation not allowed. Using default location.");
          fetchHospitals(userPosition.lat, userPosition.lng);
        }
      );
    } else {
      console.warn("Geolocation not supported. Using default location.");
      fetchHospitals(userPosition.lat, userPosition.lng);
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div>
      <Header/>
      <Navbar/>
      <div style={{ height: "60vh", width: "100%" }}>
        <MapContainer
          center={userPosition}
          zoom={16} // Set zoom level for better marker visibility
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {hospitals.map((hospital) => (
            <Marker
              key={hospital.id}
              position={[hospital.lat, hospital.lon]}
            >
              <Tooltip>{hospital.name}</Tooltip> {/* Display hospital name on hover */}
              <Popup>
                <strong>{hospital.name}</strong>
                <br />
                {hospital.address}
                <br />
                📞 {hospital.phone}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
        <h2>Nearest Hospitals</h2>
        {loading ? (
          <p>Loading hospitals...</p>
        ) : (
          <ul>
            {hospitals.map((hospital) => (
              <li key={hospital.id} style={{ marginBottom: "10px" }}>
                <strong>{hospital.name}</strong>
                <br />
                📍 {hospital.address}
                <br />
                📞 {hospital.phone}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default HospitalLocator;

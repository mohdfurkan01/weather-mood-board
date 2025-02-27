import { useState } from "react";
import { toast } from "react-toastify";

const WeatherSearch = ({ fetchWeather }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) {
      toast.warn("Please enter a city name!");
      return;
    }
    fetchWeather(city);
    setCity("");
  };

  return (
    <div className="flex items-center justify-center gap-3 p-4">
      <input
        type="text"
        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default WeatherSearch;

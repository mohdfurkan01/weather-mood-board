import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    if (!city.trim()) {
      toast.warn("Please enter a city name!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
      return;
    }

    setLoading(true);
    setError("");

    try {
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
      const response = await axios.get(url);

      setWeather(response.data);

      toast.success(`Weather fetched for ${city}!`, {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
    } catch (err) {
      setError("City not found. Try again!");

      toast.error("Failed to fetch weather data. Please check the city name.", {
        position: "bottom-center",
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return { weather, loading, error, fetchWeather };
};

export default useWeather;

import useWeather from "./hooks/useWeather";
import WeatherSearch from "./components/WeatherSearch";
import WeatherDisplay from "./components/WeatherDisplay";
import Background from "./components/Background";
import { toast, Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { weather, fetchWeather } = useWeather();

  const handleSearch = (city) => {
    if (!city.trim()) {
      toast.error("City name is required!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }
    fetchWeather(city);
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <Background weather={weather} />
      <div className="relative z-10">
        <WeatherSearch fetchWeather={handleSearch} />
        <WeatherDisplay weather={weather} />
      </div>
      <ToastContainer position="top-center" autoClose={2000} theme="dark" />
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import "../styles/animations.css"; // Custom animations
import clearSkyImg from "../assets/background.jpg"; // Default Background

// 🎯 Import all images directly
import sunnyImg from "../assets/sunny.jpeg";
import cloudyImg from "../assets/cloudy.jpeg";
import rainyImg from "../assets/rainy.jpeg";
import snowyImg from "../assets/snowy.jpeg";
import foggyImg from "../assets/foggy.jpeg";

const Background = ({ weather }) => {
  const [bgImage, setBgImage] = useState(clearSkyImg); // Initially default
  const [isFetched, setIsFetched] = useState(false); // Track weather data

  useEffect(() => {
    if (!weather) return;

    setIsFetched(true); // Weather data fetched

    const condition = weather.weather[0].main.toLowerCase();

    // 🎯 Switch case to update image
    switch (condition) {
      case "clear":
        setBgImage(sunnyImg);
        break;
      case "clouds":
        setBgImage(cloudyImg);
        break;
      case "rain":
        setBgImage(rainyImg);
        break;
      case "snow":
        setBgImage(snowyImg);
        break;
      case "fog":
      case "mist":
        setBgImage(foggyImg);
        break;
      default:
        setBgImage(clearSkyImg);
    }
  }, [weather]);

  return (
    <div
      className={`background ${isFetched ? "animated-bg" : ""}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    />
  );
};

export default Background;

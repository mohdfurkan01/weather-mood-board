# Weather App

This is a weather application built with React.js that fetches real-time weather data using the OpenWeather API. The application dynamically updates the background based on weather conditions and provides a smooth user experience.

## Features

- Fetch real-time weather data for any city
- Dynamic background changes based on weather conditions
- Animated transitions for background updates
- Toast notifications for successful and failed searches
- Displays temperature, weather condition, and an icon.

## Tech Stack

- React.js - Frontend framework
- Axios - For making API requests
- React Toastify - For user notifications
- Vite - Development server & build tool
- OpenWeather API - For fetching weather data

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (Latest LTS recommended)
- npm or yarn (Package manager)

## Installation & Setup

1️⃣ Clone the Repository
git clone https://github.com/yourusername/weather-app.git
cd weather-app

2️⃣ Install Dependencies
npm install

3️⃣ Set Up API Key
Create a .env file in the project root and add your OpenWeather API key:
VITE_WEATHER_API_KEY=your_api_key_here

4️⃣ Start the Development Server
npm run dev
This will start the Vite development server. Open http://localhost:5173 in your browser.

## Folder Structure

📂 weather-app
├── 📂 src
│ ├── 📂 assets # Background images
│ ├── 📂 components # UI Components (Background, WeatherCard, etc.)
│ ├── 📂 styles # CSS files
│ ├── App.jsx # Main App Component
│ ├── main.jsx # React Entry Point
│ ├── hooks # Custom Hooks
│ └── index.css # Global Styles
├── .env # Environment Variables
├── package.json # Project Dependencies
├── vite.config.js # Vite Configuration
└── README.md # Project Documentation

Contributions are welcome! If you find any issues or want to add features, feel free to open a pull request.

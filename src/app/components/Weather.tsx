"use client";

import React, { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { fetchUserLocation } from "../../../lib/geoLocationApi";
import fetchWeatherFromApi from "../../../lib/weatherApi";

export default function Weather() {
  useEffect(() => {
    async function fetchWeather() {
      const location = await fetchUserLocation();
      const weatherData = await fetchWeatherFromApi(location);
      console.log(weatherData);
      return weatherData;
    }
    fetchWeather();
  }, []);
  return (
    <main className="glassmorphism h-max px-3 py-3 absolute right-12 top-14 w-max flex flex-col gap-y-2 text-white">
      <div className="flex gap-x-3 font-[Poiret] font-bold text-3xl ">
        ☁️{" "}
        <div className="flex flex-col items-center">
          27 ° C <p className="font-semibold text-base">Haze</p>
        </div>
      </div>
      <p className="flex gap-x-2 items-center">
        <CiLocationOn /> New Delhi, India
      </p>
    </main>
  );
}

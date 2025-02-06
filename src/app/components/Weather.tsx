"use client";

import React, { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { fetchUserLocation } from "../../../lib/geoLocationApi";
import fetchWeatherFromApi from "../../../lib/weatherApi";
import { ubuntuFont } from "./Menus";

export default function Weather() {
  const [weatherData, setWeatherData] = useState<{
    temperature: number;
    description: string;
  }>();
  const [locationInWords, setLocationInWords] = useState<string>("");
  useEffect(() => {
    async function fetchWeather() {
      const location = await fetchUserLocation();
      const dataFromApi = await fetchWeatherFromApi(location);
      setWeatherData(() => {
        const updatedWeatherData = {
          temperature: Math.round(dataFromApi.weather.main.temp - 273.0),
          description: dataFromApi.weather.weather[0].main,
        };
        return updatedWeatherData;
      });
      setLocationInWords(
        () =>
          `${dataFromApi.location[0].state}, ${dataFromApi.location[0].country}`,
      );
    }
    fetchWeather();
  }, []);
  return (
    <main
      className={`glassmorphism ${ubuntuFont.className} h-max px-3 py-3 absolute right-12 top-14 w-max flex flex-col gap-y-2 text-white`}
    >
      <div className="flex gap-x-3 font-[Poiret] font-bold text-3xl ">
        ☁️{" "}
        <div className="flex flex-col items-center">
          {weatherData?.temperature ? weatherData?.temperature : 0} ° C{" "}
          <p className="font-semibold text-base font-sans">
            {weatherData?.description
              ? weatherData?.description
              : "Fetching..."}
          </p>
        </div>
      </div>
      <p className="flex gap-x-2 items-center justify-center">
        <CiLocationOn />
        {locationInWords ? locationInWords : "Fetching your location..."}
      </p>
    </main>
  );
}

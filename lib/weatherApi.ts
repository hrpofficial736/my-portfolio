import axios from "axios";

export default async function fetchWeatherFromApi(location: {
  latitude: number;
  longitude: number;
}) {
  const response = await fetch(
    `/api/weather/?lat=${location.latitude}&lon=${location.longitude}`,
  );
  console.log(response);
  if (!response) throw new Error("Failed to fetch weather data!");
  return response;
}

export default async function fetchWeatherFromApi(location: {
  latitude: number;
  longitude: number;
}) {
  const response = await fetch(
    `/api/weather/?lat=${location.latitude}&lon=${location.longitude}`,
  );
  if (!response) throw new Error("Failed to fetch weather data!");
  const data = await response.json();
  return data;
}

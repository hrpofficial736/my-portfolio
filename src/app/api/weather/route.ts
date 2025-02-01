// pages/api/weather.ts
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
  const { searchParams } = new URL(req.url!);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ message: "No lat and lon" });
  }

  const urlForFetchingWeather = `${process.env.OPEN_WEATHER_MAP_URI}?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`;
  const urlForFetchingStateAndCountry = `${process.env.OPEN_WEATHER_MAP_REVERSE_GEOCODING_URI}?lat=${lat}&lon=${lon}&appId=${process.env.OPEN_WEATHER_MAP_API_KEY}`;
  try {
    const weatherResponse = await fetch(urlForFetchingWeather);
    const locationResponse = await fetch(urlForFetchingStateAndCountry);
    return NextResponse.json({
      weather: await weatherResponse.json(),
      location: await locationResponse.json(),
    });
  } catch (error) {
    return NextResponse.json({
      error: `Failed to fetch weather data : ${error}`,
    });
  }
};

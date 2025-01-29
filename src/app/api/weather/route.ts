// pages/api/weather.ts
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest) => {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
  const { searchParams } = new URL(req.url!);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ message: "No lat and lon" });
  }

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    NextResponse.json({ error: "Failed to fetch weather data" });
  }
};

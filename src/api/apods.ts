import { Apod } from "../types";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY || "DEMO_KEY";
const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

export const fetchApods = async (): Promise<Apod[]> => {
  try {
    const res = await fetch(
      `${BASE_URL}&start_date=2023-07-01&end_date=2023-07-10`
    );
    return await res.json();
  } catch (e) {
    console.log("Error fetching pictures: ", e.message);
    return [];
  }
};

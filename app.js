import fetch from "node-fetch";

export default async function handler(req, res) {
  const response = await fetch(
    "https://opensky-network.org/api/states/all",
    {
      headers: {
        "Authorization": "Basic REMPLACE_ICI",
        "User-Agent": "SkyTrack/1.0"
      }
    }
  );

  const data = await response.json();

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}

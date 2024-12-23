import * as Sentry from "@sentry/nextjs";
import {waitUntil} from "@vercel/functions";

function work() {
  throw new Error("API Test 3");
}

const fetchALot = async () => {
  await fetch("https://webhook.site/b740b2f7-8f55-43f6-82df-eb40c007ee4e", { body: "5-First call", method: "POST" })
  await fetch("https://webhook.site/b740b2f7-8f55-43f6-82df-eb40c007ee4e", { body: "5-Second call", method: "POST" })
  await fetch("https://webhook.site/b740b2f7-8f55-43f6-82df-eb40c007ee4e", { body: "5-Third call", method: "POST" })
}

export default function handler(req, res) {
  Sentry.captureException(new Error("API Test 5"));
  waitUntil(fetchALot());
  work();

  res.status(200).json({ name: "John Doe" });
}

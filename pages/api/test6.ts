import * as Sentry from "@sentry/nextjs";
import {waitUntil} from "@vercel/functions";

function work() {
  throw new Error("API Test 3");
}

export default function handler(req, res) {
  Sentry.captureException(new Error("API Test 5"));
  work();

  res.status(200).json({ name: "John Doe" });
}

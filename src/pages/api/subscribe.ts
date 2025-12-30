import type { APIRoute } from "astro";
import crypto from "crypto";

export const POST: APIRoute = async ({ request }) => {
  const { email } = await request.json();

  if (!email) {
    return new Response(
      JSON.stringify({ error: "Email is required" }),
      { status: 400 }
    );
  }

  const subscriberHash = crypto
    .createHash("md5")
    .update(email.toLowerCase())
    .digest("hex");

  const data = {
    email_address: email,
    status_if_new: "subscribed",
  };

  const res = await fetch(
    `https://${import.meta.env.MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${import.meta.env.MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${import.meta.env.MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    return new Response(JSON.stringify(error), { status: 400 });
  }

  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
};

export async function emailSignup(customerEmail) {
  const data = JSON.stringify({
    email: customerEmail,
    source: 1,
  });

  const res = await fetch(process.env.NEXT_PUBLIC_EMAIL_SIGNUP_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: data,
  });

  return res.json();
}

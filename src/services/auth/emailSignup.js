export async function emailSignup(customerEmail) {
  const data = JSON.stringify({
    email: customerEmail,
    source: 1,
  });

  const res = await fetch(`${process.env.NEXT_PUBLIC_USR_SVC_URL}/api/Auth/email-signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: data,
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data?.message || `Email signup failed with status ${res.status}`);
  }

  return data;
}

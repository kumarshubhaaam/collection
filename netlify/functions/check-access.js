exports.handler = async function(event, context) {
  const cookies = event.headers.cookie || '';
  const isVerified = cookies.includes("verified_access=true");

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ verified: isVerified })
  };
};

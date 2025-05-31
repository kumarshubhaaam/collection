exports.handler = async function(event, context) {
  const params = event.queryStringParameters;
  const url = params.url || '';
  const title = params.title || '';

  const expireDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString();

  const headers = {
    "Location": `/stream.html?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
    "Set-Cookie": `verified_access=true; Path=/; HttpOnly; SameSite=Lax; Expires=${expireDate}`
  };

  return {
    statusCode: 302,
    headers,
  };
};

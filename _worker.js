export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = "discord.com";
    url.pathname = "/api/v9/interactions"; // Discord API 的路径
    const response = await fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body
    });
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    });
  }
}

export default {
  async fetch(request, env) {
    const targetUrl = 'https://www.discord.com';
    let url = new URL(request.url);
    if (url.pathname.startsWith('/api/v9/interactions') && request.method === 'POST') {
      url.hostname = targetUrl
      new_request = new Request(url, {
        method: 'POST', // 指定使用 POST 方法
        body: request.body, // 将原始请求的主体作为新请求的主体
        headers: request.headers, // 使用原始请求的所有头部
      });
      return fetch(new_request);
    }
    return env.ASSETS.fetch(request);
  },
};

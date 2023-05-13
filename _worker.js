export default {
  async fetch(request, env) {
    let url = new URL(request.url);
    if (url.pathname.startsWith('/')) {
      url.hostname = 'https://www.discord.com'
      new_request = new Request(url, {
        method: 'POST', // 指定使用 POST 方法
        body: request.body, // 将原始请求的主体作为新请求的主体
        headers: request.headers, // 使用原始请求的所有头部
      });
      return fetch(newRequest);
    }
    return env.ASSETS.fetch(request);
  },
};

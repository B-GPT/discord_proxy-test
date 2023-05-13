export default { 
  async fetch(request, env) {
    const targetUrl = 'www.discord.com'; // 指定目标 URL
    const url = new URL(request.url);
    let newRequest;

    // 如果请求路径以 / 开头，则转发到目标 URL
    if (url.pathname.startsWith('/api/v9/interactions')) {
      url.hostname = targetUrl;
      newRequest = new Request(url, {
        method: 'POST', // 指定使用 POST 方法
        body: await request.text(), // 将原始请求的主体作为新请求的主体
        headers: request.headers, // 使用原始请求的所有头部
      });
      return fetch(newRequest);
    } else {
      return fetch(url, {
        headers: request.headers,
        method: request.method,
        body: request.body
        // redirect: 'follow'
      });
    }
  },
  
};

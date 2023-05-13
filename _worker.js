export default { 
  async fetch(request, env) {
    const targetUrl = 'https://www.discord.com'; // 指定目标 URL
    const url = new URL(request.url);
    let newRequest;

    // 如果请求路径以 /api/v9/interactions 开头，则转发到目标 URL
    if (url.pathname.startsWith('/api/v9/interactions')) {
      // url.hostname = targetUrl;
      newRequest = new Request(url, {
        method: 'POST', // 指定使用 POST 方法
        body: request.body, // 将原始请求的主体作为新请求的主体
        headers: request.headers, // 使用原始请求的所有头
      });
      return fetch(await newRequest);
    } else {
      newRequest = new Request(url, {
        method: request.method, // 指定使用原始请求的方法
        body: request.body, // 使用原始请求的主体
        headers: request.headers, // 使用原始请求的所有头部
        redirect: 'follow', // 跟随重定向
      });
      return fetch(newRequest);
    }
  },
};

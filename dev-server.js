// Native Bun Static File Server
const server = Bun.serve({
  port: 8000,
  fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;
    
    if (path === "/" || path === "") {
      path = "/index.html";
    }
    
    // Resolve local file path
    const filePath = "." + path;
    const file = Bun.file(filePath);
    
    // Check if file exists
    return file.exists().then(exists => {
      if (exists) {
        return new Response(file);
      } else {
        return new Response("Not Found", { status: 404 });
      }
    });
  },
});

console.log(`Accepting connections at http://localhost:${server.port}`);

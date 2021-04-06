async function handleRequest (request: Request): Promise<Response> {
  const { pathname } = new URL(request.url)
  console.log(request)
  switch (pathname) {
    case '/':
    case '/index.html': {
      const url = new URL('index.html', import.meta.url)
      const response = await fetch(url)
      response.headers.set('Content-Type', 'text/html; charset=utf-8')
      return response
    }
    default:
      return new Response(null, { status: 404 })
  }
}

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request))
})

import { serve, Response } from 'https://deno.land/std@0.91.0/http/server.ts'

const port = Number(Deno.env.get('PORT') ?? 8080)
if (Number.isNaN(port))
  throw new TypeError('Invalid port value')

const server = serve({ port })
console.log(`Serving on port ${port}`)

const Responses: Record<string, Response> = {
  INDEX: {
    headers: new Headers({ 'Content-Type': 'text/html' }),
    body: await Deno.readTextFile('./index.html')
  },
  NOT_FOUND: {
    status: 404
  }
}

for await (const request of server) {
  switch (request.url) {
    case '/':
    case '/index.html':
      request.respond(Responses.INDEX)
      break
    default:
      request.respond(Responses.NOT_FOUND)
  }
}

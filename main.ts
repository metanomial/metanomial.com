import { serve } from 'https://deno.land/std@0.80.0/http/server.ts'
import { respondIndexHTML } from './index.html.ts'

const port = Number(Deno.env.get('PORT') ?? 8080)
if (Number.isNaN(port)) throw new TypeError('Invalid port value')

const server = serve({ port })
console.log(`Serving on port ${port}`)

for await (const request of server) {
	switch (request.url) {
		case '/':
		case '/index.html':
			respondIndexHTML(request)
			break
		default:
			request.respond({ status: 404 })
	}
}

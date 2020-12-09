import { ServerRequest } from 'https://deno.land/std@0.80.0/http/server.ts'

const headers = new Headers({
	'Content-Type': 'text/html'
})

const body = `<DOCTYPE html>
<html lang=en>

<head>
	<title>metanomial.com</title>
	<meta charset=utf-8>
	<meta name=viewport content="width = device-width, initial-scale = 1">
	<link rel=stylesheet href="https://fonts.googleapis.com/css?family=Roboto&display=swap">

<body style="font-family: 'Roboto', sans-serif;">
	<h1>metanomial.com</h1>
	<p>Coming Soon</p>
	<h2>Social Media</h2>
	<p><a href="https://twitter.com/metanomial">Twitter</a>&thinsp;&mdash;&thinsp;<a href="https://github.com/metanomial">GitHub</a>&thinsp;&mdash;&thinsp;<a href="mailto:benjamin@metanomial.com">Email</a>
	<footer style="margin-top: 2rem;">
		<p>&copy;2020 Benjamin Herman. All Rights Reserved.
	</footer>
`

export function respondIndexHTML (request: ServerRequest) {
	request.respond({ headers, body })
}

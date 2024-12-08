import http from 'node:http'

import { json } from './middlewares/json.js'
import { routes } from './routes.js'

const server = http.createServer(async (req, res) => {
   const {method, url} = req

   await json(req, res)

//    if (method === 'GET' && url ==='/users') {
//     return res.end('Lista de Tasks')
//    }

//    if (method === 'POST' && url ==='/users') {
//     return res.end('Task criada com sucesso')
//    }
const route = routes.find(route => {
    return route.method === method && route.path.test(url)
})
if (route) {
    const routeParams = req.url.match(route.path)

    const { query, ...params } = routeParams.groups

    req.params = params
    req.query = query ? extractQueryParams(query) : {}

    return route.handler(req, res)
}

return res.writeHead(404).end()
}) 



server.listen(3333)
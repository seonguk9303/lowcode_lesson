const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))	// ← 사용할 json 파일 지정
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

server.use(router)

let port = 3002;	// ← port 설정 부분 (변경 가능)
server.listen(port, () => {
    console.log(`JSON Server is running, port(${port})`)
})
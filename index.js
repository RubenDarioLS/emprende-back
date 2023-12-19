const http = require("http")

const app = () => {
    console.log('Hola mundo!')
}

const server = http.createServer(app)


server.listen(3000)
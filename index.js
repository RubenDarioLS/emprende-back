const http = require("http")
require('dotenv').config()


const requestListener = () => {
    console.log('Hola mundo!!')
}

const server = http.createServer(app)

const PORT = process.env.PORT
server.listen(PORT, () => { console.log("App corriendo en el puerto " + PORT) })
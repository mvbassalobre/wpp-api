require("./bootstrap")
const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
	res.send("api version 1.0.5 working...")
})

app.use('/auth', require("@routes/auth"))
app.use('/wpp', require("@routes/wpp"))

const server_port = process.env.PORT || 3000
app.listen(server_port, () => {
	console.log(`Server running in http://localhost:${server_port}`)
})
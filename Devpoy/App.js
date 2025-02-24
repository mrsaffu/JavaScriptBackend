require('dotenv').config();

const express = require('express')
const app = express()

const port = 7000;
app.get('/', (req, res) => {
    res.send('<h1>Hello dear i am home page</h1>')
})
app.get('/service', (req, res) => {
    res.send("<h1>hi i am service page</h1>")
})
app.get('/login', (req, res) => {
    res.send('<h1>Please logIn this page</h1>')
})
app.get('/linkedin', (req, res) => {
    res.send('<h1>welcome to linked in page</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port: http://localhost:${port}`)
})
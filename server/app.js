const express =  require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    const api_key = process.env.API_KEY
    const url = `https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=${api_key}`
    axios.get(url)
    .then((response)=>{
        res.send(response.data)
    })
    .catch((err)=>{
        console.log("hello")
    })
})

app.listen(process.env.PORT || 8081)
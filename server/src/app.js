const express =  require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const axios = require("axios")

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
    // res.send({
    //     message: 'hello world!'
    // })
    axios.get("https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key=31e76470-c881-410a-8d4f-dfcb368eec22")
    .then((response)=>{
        res.send(response.data)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.listen(process.env.PORT || 8081)
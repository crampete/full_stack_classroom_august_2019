let express = require('express')
var bodyParser = require('body-parser')
let app = express()
let axios = require('axios')
var cors = require('cors')


app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))

app.post('/name', (req,res) => {
    console.log(req.body)
    res.send("Hi")
})


function getCoords(place, cb) {
    let url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+place+".json?access_token=pk.eyJ1IjoiZ2VvcmdlbWlja2FlbDE0IiwiYSI6ImNqeGtxamd5ajA0aGczbm91dnQ0cXdyZ3gifQ.b9c3wOnq1ZfebBG5yT2ekg"
    axios.get(url)
    .then((response)=>{
        let data = response.data
        let longitude = data.features[0].center[0]
        let latitude = data.features[0].center[1]
        cb(longitude, latitude)
    })
}

function getWeather(latitude, longitude, cb){
    let url = "https://api.darksky.net/forecast/3e8f32e5453048585609d42d80b459e0/"+latitude+","+longitude
    axios.get(url)
    .then((response)=>{
        let data = response.data
        let temperature = data.currently.temperature
        cb(temperature)
    })
}

app.post("/temperature",(req,res)=>{
    let place = req.body.place;
    getCoords(place, (longitude, latitude)=>{
        getWeather(latitude,longitude, (temperature)=>{
            res.send({"temperature" : temperature})
        })
    })
})


app.post("/coords",(req,res)=>{
    let place = req.body.place;
    let url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+place+".json?access_token=pk.eyJ1IjoiZ2VvcmdlbWlja2FlbDE0IiwiYSI6ImNqeGtxamd5ajA0aGczbm91dnQ0cXdyZ3gifQ.b9c3wOnq1ZfebBG5yT2ekg"
    
    axios.get(url)
    .then((response)=>{
        let data = response.data
        let longitude = data.features[0].center[0]
        let latitude = data.features[0].center[1]
        res.send({latitude, longitude})
    })
})

app.post("/weather", (req,res)=>{
    // Call the dark sky api and return the result in reponse
    let longitude = req.body.longitude;
    let latitude = req.body.latitude

    let url = "https://api.darksky.net/forecast/3e8f32e5453048585609d42d80b459e0/"+latitude+","+longitude
    axios.get(url)
    .then((response)=>{
        let data = response.data
        let temperature = data.currently.temperature
        res.send({ temperature})
    })
})


app.get('/hi', (req, res) => {
    res.send("Hi there "+req.query.name)
})
app.listen(8000)

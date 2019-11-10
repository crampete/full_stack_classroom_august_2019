let axios = require('axios')

axios.get("https://api.darksky.net/forecast/3e8f32e5453048585609d42d80b459e0/37.8267,-122.4233").then((res)=>{
console.log(res.data)
})


https://api.mapbox.com/geocoding/v5/mapbox.places/chennai.json
?access_token=pk.eyJ1IjoiZ2VvcmdlbWlja2FlbDE0IiwiYSI6ImNqeGtxamd5ajA0aGczbm91dnQ0cXdyZ3gifQ.b9c3wOnq1ZfebBG5yT2ekg



1. Create a API called "/coords" with POST req , taking in "place" 
in the body
2. Call a get req to mapbox api url get the data
3. get latitude and longitude from the data  
( will be in field called 'center') and send in the
response 
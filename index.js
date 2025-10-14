let express = require('express');
let app = express();
let cityData = {

    "cities": [
        { "city": "New York, NY",     "population": 8804190, "distance_from_us_center_mi": 1007.9 },
        { "city": "Los Angeles, CA",  "population": 3898747, "distance_from_us_center_mi": 1466.2 },
        { "city": "Chicago, IL",      "population": 2746388, "distance_from_us_center_mi": 397.4 },
        { "city": "Houston, TX",      "population": 2304580, "distance_from_us_center_mi": 556.7 },
        { "city": "Phoenix, AZ",      "population": 1608139, "distance_from_us_center_mi": 1080.0 },
        { "city": "Philadelphia, PA", "population": 1603797, "distance_from_us_center_mi": 892.7 },
        { "city": "San Antonio, TX",  "population": 1434625, "distance_from_us_center_mi": 655.8 },
        { "city": "San Diego, CA",    "population": 1386932, "distance_from_us_center_mi": 1435.9 },
        { "city": "Dallas, TX",       "population": 1304379, "distance_from_us_center_mi": 407.3 },
        { "city": "San Jose, CA",     "population": 1013240, "distance_from_us_center_mi": 1615.2 }
    ]
}

app.get('/data', function (req, res) {
  res.json(cityData);
});

app.get('/data/:city', (req, res) => {
  console.log(req.params)
  res.send(`City: ${req.params.city}`);
})


app.use(express.static("public"));

app.get('/', function (req, res) {
  res.send('Hello!');
});

app.get('/about', function (req, res) {
  res.send('About us');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});



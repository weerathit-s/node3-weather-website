const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b2d4f139daacd1eaf6e2e3528c84637c&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' | Temperature: ' + body.current.temperature + ' °C | Feels like: ' + body.current.feelslike + ' °C | Wind speed: ' + body.current.wind_speed + ' m/s')
        }
    })
}

module.exports = forecast
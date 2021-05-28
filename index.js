/*
|=======================================|
| NAME: EXAMPLE API                     |
| VERSION: 0.0.1                        |
| CREATOR: AMIRUL DEV                   |
| WEB: WWW.AMIRULDEV.NET                |
| TEMPLATE BY: MBAH AGUS                |
|=======================================|
*/
var express = require('express'),
cors = require('cors'),
secure = require('ssl-express-www');
const PORT = process.env.PORT || 1 || 2 || 3 
/* port edit sesukamu */

var { color } = require('./renz/lib/color.js')
var mainrouter = require('./routes/main'),
apirouter = require('./routes/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("./renz/views"))
/* diatas ini adalah dir untuk template
dokumentasi api anda*/

app.use('/', mainrouter) // home
app.use('/api', apirouter) // api

app.listen(PORT, () => {
console.log(color("Server running on port " + PORT,'green'))
})

module.exports = app

/*
|=======================================|
| NAME: EXAMPLE API                     |
| VERSION: 0.0.1                        |
| CREATOR: AMIRUL DEV                   |
| WEB: WWW.AMIRULDEV.NET                |
| TEMPLATE BY: MBAH AGUS                |
|=======================================|
*/
__path = process.cwd()

var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(__path + '/renz/views/index.html')
})


router.get('/api', (req, res) => {
    res.sendFile(__path + '/renz/views/index.html')
})

router.get('/api/about', (req, res) => {
    res.sendFile(__path + '/renz/views/index.html')
})


router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'King Bot',
            namaowner: 'Amirul Dev',
            instagram: 'amirul.dev',
            youtube : 'Bos Muda'
        }
    }
    res.json(config)
})

module.exports = router

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

var trial = 'rud'
var lock = 'renz'
const pw = `web-api: www.amiruldev.net`

let creator = '@amirul.dev'

var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();
const am = require('ra-api');

var { color, bgcolor } = require(__path + '/renz/lib/color.js');
var { fetchJson } = require(__path + '/renz/lib/fetcher.js')
var options = require(__path + '/renz/lib/options.js')
var {
whois
} = require('../renz/lib');

var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

m = {
 eror: {
 status: false,
 code: 1337,
 creator: creator,
 message: 'Sistem sedang maintenance\ncobalagi nanti!!'
},

 nokey: {
  status: false,
  code: 404,
  creator: creator,
  message: 'Silahkan masukan parameter apikey'
},

 inkey: {
  status: false,
  code: 404,
  creator: creator,
  message: `Apikey invalid!!\nGapunya apikey?\n
silahkan beli di wa.me/6285157489446`
},
 
 noque: {
  status: false,
  code: 404,
  creator: creator,
  message: `Silahkan masukan parameter query`
},

 url: {
  status: false,
  code: 404,
  creator: creator,
  message: `Silahkan masukan parameter url`
}

}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------AmirulDev'+'Amirul--Gans';
        
// MULAI

//TINY SHORTNER
router.get('/tiny', async (req, res, next) => {
var apikeyInput = req.query.apikey,
url = req.query.url

if(!apikeyInput) return res.json(m.nokey)
if(apikeyInput != lock) return res.json(m.inkey)
if (!url) return res.json(m.url)
 
request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
 try {
  res.json({
    status : true,
    code: 200,
    creator : creator,
      result : {
           link : `${body}`,
          },
    message : `jangan lupa follow ${creator}`
        })
} catch (e) {
 console.log('Error :', color(e,'red'))
 res.json(`Url yang anda masukan salah\nexample: https://amiruldev.net`)
         }
     })
})




module.exports = router

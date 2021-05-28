/*
|=======================================|
| NAME: EXAMPLE API                     |
| VERSION: 0.0.1                        |
| CREATOR: AMIRUL DEV                   |
| WEB: WWW.AMIRULDEV.NET                |
| TEMPLATE BY: MBAH AGUS                |
|=======================================|
*/
const chalk = require('chalk')

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
	color,
	bgcolor
}

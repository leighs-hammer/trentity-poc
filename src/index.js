import express from "express"
import bodyParser from "body-parser"
import tokenvalidator from "./middlewares/tokenevaluator"

/**
 * APP
 */
const app = express()

app.listen(8000, () => console.log('Example app listening on port 8000!'))

// Parsers
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

/**
 * Root
 */

app.get('/', function (req, res) {
  res.send('request not authorized')
})

/**
 * Token
 */

app.post('/token',urlencodedParser, function (req, res) {
	const validation = tokenvalidator(req.body)
	if (validation.error) {
		return res.sendStatus(403, validation.message)
	}
  res.send(validation)
})
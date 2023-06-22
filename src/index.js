const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 3000

const routes = require('./routes')

//route init
//route 
routes(app);

app.use(express.static(path.join(__dirname, 'public')))

//handlebars
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'))
//log
app.use(morgan('combined'))

//middleware
app.use(express.urlencoded({
  extended: true,
}))
app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
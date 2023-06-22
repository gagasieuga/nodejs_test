const newsRouter = require('./news')
const sitesRouter = require('./site.js')
function route(app){
    app.use('/news', newsRouter)
    app.use('/', sitesRouter)
      
}

module.exports = route




//   app.post('/search', async (req, res) => {
//     await res.send('')
//     console.log(req.body)
//   })

    
// app.get('/news', (req, res) => {
//   console.log(req.query.q)
//   res.render('news')
// })
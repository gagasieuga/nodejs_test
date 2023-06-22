class NewsController {

    //[GET] /news
    indexNews(req, res) {
        res.render('news')
    }
    //[GET] details
    show(req, res) {
        res.send('news details!')
    }
}

module.exports = new NewsController
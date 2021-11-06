const express = require('express')
const newsRouter = express.Router();

newsRouter.get('', async( req, res) =>{
    res.render('products')
})

module.exports = newsRouter


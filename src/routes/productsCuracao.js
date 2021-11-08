const express = require('express')
const RouterCuracao = express.Router();
const axios = require('axios')

RouterCuracao.get('/products', async( req, res) =>{
    try{
        const curacaoAPI = await axios.get('https://s3-sa-east-1.amazonaws.com/api.sis/embedded/PE_LaCuracao/SRT/data/products.json')
        let dataArray = curacaoAPI.data
        for (var key of Object.keys(dataArray)){
            dataArray = {
                ...dataArray,
                company: "laCuracao"
            }
        }
        res.render('products', {products: dataArray} )
    }catch (err){
        console.error('Error', err.message)
    }
})

RouterCuracao.get('/products/:id', async( req, res) =>{
    let idProduct = req.params.id
    try{
        const curacaoAPI = await axios.get('https://s3.sa-east-1.amazonaws.com/api.sis/embedded/PE_Falabella/srt/data/products.json')
        const dataArray = curacaoAPI.data
        const productDetail = dataArray[idProduct]
        res.render('productsDetails', {products: productDetail} )
    }catch (err){
        console.error('Error', err.message)
    }
})





module.exports = RouterCuracao


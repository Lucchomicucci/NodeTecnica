const express = require('express')
const RouterFalabella = express.Router();
const axios = require('axios')

RouterFalabella.get('/products', async( req, res) =>{
    try{
        const falabellaAPI = await axios.get('https://s3.sa-east-1.amazonaws.com/api.sis/embedded/PE_Falabella/srt/data/products.json')
        let dataArray = falabellaAPI.data
        for (var key of Object.keys(dataArray)){
            dataArray = {
                ...dataArray,
                company: "falabella"
            }
        }
        res.render('products', {products: dataArray} )
    }catch (err){
        console.error('Error', err.message)
    }
})

RouterFalabella.get('/products/:id', async( req, res) =>{
    let idProduct = req.params.id
    try{
        const falabellaAPI = await axios.get('https://s3.sa-east-1.amazonaws.com/api.sis/embedded/PE_Falabella/srt/data/products.json')
        const dataArray = falabellaAPI.data
        const productDetail = dataArray[idProduct]
        res.render('productsDetails', {products: productDetail} )
    }catch (err){
        console.error('Error', err.message)
    }
})




module.exports = RouterFalabella
const { PORT } = require('./config/index');
const apiRoutes = ''
// const { NotFoundMiddleware, ErrorMiddleware } = require('./src/middlewares');

//agregar express
const express = require('express');
const app = express();
//agregar cors

// Archivos estaticos
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating engine
app.set('views', './src/views/partials')
app.set('view engine', 'ejs')


// api routes
const RouterCuracao = require('./src/routes/productsCuracao');
const RouterFalabella = require('./src/routes/productsFalabella');

app.use('/laCuracao', RouterCuracao)
app.use('/falabella', RouterFalabella)


// //error handle routes
// app.use(ErrorMiddleware);
// app.use(NotFoundMiddleware);

//levantar servidor
app.listen(PORT, ()=>{
    console.log('server is running on port', PORT)
})
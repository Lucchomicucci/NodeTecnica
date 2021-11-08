const { PORT } = require('./config/index');
const { ErrorMiddleware } = require('./src/middlewares/not-found.middleware');
//agregar express
const express = require('express');
const app = express();
//agregar cors
const cors = require('cors')
app.use(cors());

// Archivos estaticos
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Templating engine
app.set('views', './src/views/partials')
app.set('view engine', 'ejs')


// api routes
const RouterCuracao = require('./src/routes/productsCuracao');
const RouterFalabella = require('./src/routes/productsFalabella');

app.use('/laCuracao', RouterCuracao)
app.use('/falabella', RouterFalabella)


// //error handle routes
app.use(ErrorMiddleware);

//levantar servidor
app.listen(PORT, ()=>{
    console.log('server is running on port', PORT)
})
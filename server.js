const express = require('express');
var exphbs = require('express-handlebars');
const app = express();

const hbs = require('express-hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8080;

app.engine('.hbs', hbs.express4({
    partialsDir: __dirname + '/views/parciales' //Los parcial los tiene q buscar en este direccion
}));
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public')); //ACa donde va a buscar las paginas que se van a mostrar. 
//Todo este contenido es visto por los usuarios


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'yoel',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log('Escuchando peticiones en el puerto ' + port);
});
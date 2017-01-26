var express = require('express');
var flashgram = express();

flashgram.set('view engine', 'pug');

flashgram.use(express.static('public'));

flashgram.get('/', function(req, res) {
    res.render('index');
})

flashgram.listen(3000, function(err){
    if (err) {
        console.log('Hubo un error'), process.exit(1);
    }
    
    console.log('El servidor se ha iniciado en el puerto 3000')
})
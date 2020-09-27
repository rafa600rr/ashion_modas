// Importar express
let express = require('express');

// Importar o express-handlebars
let handlebars = require('express-handlebars');

// App
let app = express();

// Templete
app.engine('handlebars', handlebars({defaultLayout:'principal'}));
app.set('view engine', 'handlebars');

// Rotas
app.get('/index', (req, res) => {
    res.render('index');
});

// Servidor
app.listen(8080);
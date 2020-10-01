// Importar express
let express = require('express');

// Importar handlebars
let handlebars = require('express-handlebars');

// Exportar APP'
let app = express();

// Templetes para handlebars
app.engine('handlebars', handlebars({defaultLayout:'principal'}));
app.set('view engine', 'handlebars');

// Diretório public
app.use(express.static(__dirname + '/public')); 

// Rotas
app.get('/inicio', (req, res) =>{
    res.render('index');
});

// Rota LOGIN
app.get('/login', (req, res) =>{
    res.render('login');
});

// Rota CADASTRO
app.get('/cadastro', (req, res) =>{
    res.render('cadastro');
});

// Servidor
app.listen(8080);
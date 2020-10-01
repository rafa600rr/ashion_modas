// Importar express
let express = require('express');

// Importar handlebars
let handlebars = require('express-handlebars');

// Importar Body P\rser
let bodyParser = require('body-parser');

// Exportar APP'
let app = express();

// Templetes para handlebars
app.engine('handlebars', handlebars({defaultLayout:'principal'}));
app.set('view engine', 'handlebars');

// Diretório public
app.use(express.static(__dirname + '/public')); 

// JSON via URL
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// JSON de clientes
let clientes = [];

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

app.post('/cadastro', (req, res) =>{
    clientes.push({"nome": require.body.nome, 
    "sobrenome": require.body.sobreNome})
    console.log(clientes)
    res.render('/cadastro')
})

// Servidor
app.listen(8080);
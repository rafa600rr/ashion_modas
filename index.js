// Importar express
let express = require('express');

// Importar handlebars
let handlebars = require('express-handlebars');

// Importar Body P\rser
let bodyParser = require('body-parser');

// Importar node-fetch
let nodeFetch = require('node-fetch');

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

// Rotas
app.get('/inicio', (req, res) =>{
    res.render('index');
});

// Rota LOGIN
app.get('/login', (req, res) =>{
    res.render('login');
});

// Rota de cadastro
app.get('/cadastro', (req, res) =>{
    res.render('cadastro');
});

// Rota para enviar usuarios ao JSON externo
app.post('/cadastrar', (req, res) =>{

    let nome = req.body.nome;
    let sobreNome = req.body.sobreNome;
    let telefone = req.body.tel;
    let cpf = req.body.cpf;
    let data = req.body.data;
    let sexo = req.body.sexo;
    let endereco = req.body.endereco;
    let cep = req.body.cep;
    let numero = req.body.numero;
    let bairro = req.body.bairro;
    let email = req.body.email;
    let senha = req.body.senha1;

    let usuarios = {
    'nome':nome,
    'sobreNome':sobreNome,
    'telefone':telefone,
    'cpf':cpf,
    'data':data,
    'sexo':sexo,
    'endereco':endereco,
    'cep':cep,
    'numero':numero,
    'bairro':bairro,
    'email':email,
    'senha':senha};

    nodeFetch('http://localhost:3000/usuarios', {
        method: "POST",
        body: JSON.stringify(usuarios),
        headers: {'Content-Type' : 'application/json'}
    })

    .then(res.redirect('/login'))
})

// Rota para o carrinho de compras
app.get('/carrinho', (req, res) =>{

    res.render('carrinho')
})

// Servidor
app.listen(8081);
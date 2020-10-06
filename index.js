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

app.post('/cadastrar', (req, res) =>{

    let nome = req.body.nome;
    let sobreNome = req.body.sobreNome;
    let telefone = req.body.tel;
    let cpf = req.body.cpf;
    let data = req.body.data;
    let sexo = req.body.sexo;
    let endereco = req.body.endereco;
    let cep = req.body.cep;
    let email = req.body.email;
    let senha = req.body.senha1;

    clientes.push({'nome':nome,
        'sobreNome':sobreNome,
        'telefone':telefone,
        'cpf':cpf,
        'data':data,
        'sexo':sexo,
        'endereco':endereco,
        'cep':cep,
        'email':email,
        'senha':senha});
    
    res.render('cadastro', {'cadastro':true});
});

app.get('/carrinho', (req, res) =>{

    res.render('carrinho')
})

// Servidor
app.listen(8080);
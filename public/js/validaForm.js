// Função para validar criação de usuário

function cadastrarUsers(){

    let retorno = true

        let nome = document.getElementById("nome").value;
        let sobreNome = document.getElementById("sobreNome").value;
        let tel = document.getElementById("tel").value;
        let sexo = document.getElementById("sexo").value;
        let cpf = document.getElementById("cpf").value;
        let data = document.getElementById("data").value;
        let endereco = document.getElementById("endereco").value;
        let cep = document.getElementById("cep").value;
        let numero = document.getElementById("numero").value;
        let bairro = document.getElementById("bairro").value;
        let email = document.getElementById("email").value;
        let senha1 = document.getElementById("senha1").value;
        let senha2 = document.getElementById("senha2").value;

        if(nome.length <= 5){
            alert("Nome inválido!");
            retorno = false;
        }else if(sobreNome.length <= 5){
            alert("Sobrenome inválido!");
            retorno = false;
        }else if(tel.length != 11){
            alert("Telefone inválido");
            retorno = false;
        }else if(sexo == 1){
            alert("Campo sexo deve ser preenchido!");
            retorno = false;
        }else if(cpf.length != 11){
            alert("CPF inválido");
            retorno = false;
        }else if(endereco == ""){
            alert("Endereço invélido");
            retorno = false;
        }else if(cep.length != 8){
            alert("CEP inválido");
            retorno = false;
        }else if(numero == ""){
            alert("Campo número deve ser preenchido!");
            retorno = false;
        }else if(bairro == ""){
            alert("Campo bairro deve ser preenchido!");
            retorno = false;
        }else if((email.indexOf("@") == -1) || (email.indexOf("é") != -1) || (email.indexOf("ç") != -1) || (email.indexOf("ã") != -1) || (email.indexOf("ê") != -1)){
            alert("Email inválido!")
            retorno = false;
        }else if(senha1.length < 8){
            alert("A senha deve conter mais de 8 caractere!");
            retorno = false;
        }else if(senha2 != senha1){
            alert("As senhas devem ser as mesmas!");
            retorno = false;
        }
    return retorno;
    }    

// Função para validação de login
function login(){
    
    let retorno = true

        let email = document.getElementById("email").value;
        let senha = document.getElementById("pass").value;

        if(email != "rafaelvieirapalmital@gmail.com"){
            alert("E-mail ou senha inválidos!");
            retorno = false;
        }else if(senha != "@R4431314v"){
            alert("E-mail ou senha inválidos!");   
            retorno = false
        }
    return retorno;
}
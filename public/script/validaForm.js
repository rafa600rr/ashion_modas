// Função para validar criação de usuário
window.onload = () =>{
    document.getElementById("cadastrar").addEventListener("click", () =>{
        let nome = document.getElementById("nome").value;
        let sobreNome = document.getElementById("sobreNome").value;
        let tel = document.getElementById("tel").value;
        let cpf = document.getElementById("cpf").value;
        let data = document.getElementById("data").value;
        let endereco = document.getElementById("endereco").value;
        let cep = document.getElementById("cep").value;
        let email = document.getElementById("email").value;
        let senha1 = document.getElementById("senha1").value;
        let senha2 = document.getElementById("senha2").value;

        if(nome.length <= 5){
            alert("Nome inválido!");
        }else if(sobreNome.length <= 5){
            alert("Sobrenome inválido!");
        }else if(tel.length != 11){
            alert("Telefone inválido");
        }else if(cpf.length != 11){
            alert("CPF inválido");
        }else if(endereco == ""){
            alert("Endereço invélido");
        }else if(cep.length != 8){
            alert("CEP inválido");
        }else if((email.indexOf("@") == -1) || (email.indexOf("é") != -1) || (email.indexOf("ç") != -1) || (email.indexOf("ã") != -1) || (email.indexOf("ê") != -1)){
            alert("Email inválido!")
        }else if(senha1.length < 8){
            alert("A senha deve conter mais de 8 caractere!");
        }else if(senha2 != senha1){
            alert("As senhas devem ser as mesmas!");
        }
    })
}

// Função para validação de login

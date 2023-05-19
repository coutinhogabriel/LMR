function comparar (){
    let nomecomp = document.getElementById ("nomecomp").value;
    let endereco = document.getElementById ("endereco").value;
    let email = document.getElementById ("email").value;
    let cmail = document.getElementById ("cemail").value;
    let senha = document.getElementById ("senha").value;
    let csenha = document.getElementById ("csenha").value;

    if (nomecomp == "" || endereco == "" || email == "" || cmail == "" || senha == "" || csenha == ""){
            alert ("Preencha todos os campos");
        }else if (email != cmail) {
            alert ("E-mail inválido");
        } else if (senha != csenha) {
            alert ("Senha inválida");
        } else { 
            alert ("Dados válidos");
            href="index.html"}
}
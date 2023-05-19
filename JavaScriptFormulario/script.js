function NomeCompleto(){
    let Nome = document.getElementById("pnome").value;
    let SobreNome = document.getElementById("psobre").value;
    let NomeCompleto = (Nome + " " + SobreNome);
    
    alert("Olá " + NomeCompleto);
}

function calculo (){
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let operacao = document.getElementById("operacao").value;
    let resultado;
    if (valor1 == ""|| valor2 == ""){
        alert ("Preencha todos os campos");
    } else if (operacao == "+"){
        resultado = parseInt (valor1) + parseInt (valor2);
        alert ("O resultado é: " + resultado);
    } else if (operacao == "-"){
        resultado = parseInt (valor1) - parseInt (valor2);
        alert ("O resultado é: " + resultado);
    } else if (operacao == "*"){
        resultado = parseInt (valor1) * parseInt (valor2);
        alert ("O resultado é: " + resultado);
    } else if (operacao == "/"){
        if (valor2 ==0){
            alert ("Operação inválida");
        } else {
        resultado = parseInt (valor1) / parseInt (valor2);
        alert ("O resultado é: " + resultado);
    }
}
}
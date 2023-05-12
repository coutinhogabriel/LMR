function NomeCompleto(){
    let Nome = document.getElementById("pnome").value;
    let SobreNome = document.getElementById("psobre").value;
    let NomeCompleto = (Nome + " " + SobreNome);
    
    alert("Olá " + NomeCompleto);
}
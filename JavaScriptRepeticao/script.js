function DiaSemana() {
    var Hoje = new Date(document.getElementById("data").value);
    var Dia = Hoje.getDay();
    var Semana = new Array(6);

    Semana[0] = "Domingo";
    Semana[1] = "Segunda-feira";
    Semana[2] = "Terça-feira";
    Semana[3] = "Quarta-feira";
    Semana[4] = "Quinta-feira";
    Semana[5] = "Sexta-feira";
    Semana[6] = "Sábado";

    document.write(Semana[Dia]);
    document.write("<br>", Hoje);


}

function ColorirNome() {
    var Cor = new Array("Black", "Magenta", "green", "blue", "red", "yellow", "Silver");
    var Nome = document.getElementById("pNome").value;

    for(let i=0; i<Cor.length; i++) {
        document.write(Nome.fontcolor(Cor[i])+"<br>");

}
}
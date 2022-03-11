/*Sistema para pegar hora e comprimentar*/
function cumprimento(){
    var agora = new Date();
    var hora = agora.getHours();

    if (hora > 6 && hora < 12) {
        alert('Bom Dia caro leitor!');
    } else
        if(hora > 12 && hora < 18){
            alert('Boa Tarde caro leitor!');
        } else {
            alert('Boa Noite caro leitor!');
        }
}

cumprimento();

// Função para pegar a hora para o relógio
function relogioAtualizado(){
    var display = document.querySelector('.display');
    var agora = new Date();
    var horario = corrigirHora(agora.getHours()) + ':' + corrigirHora(agora.getMinutes()) + ':' + corrigirHora(agora.getSeconds());

    display.textContent = horario
}

// Correção dos minutos e segundos
function corrigirHora(numero){
    if(numero < 10){
        numero = '0' + numero;
    }
    return numero;
}

relogioAtualizado();
setInterval(relogioAtualizado, 1000);
console.log(horario);

    
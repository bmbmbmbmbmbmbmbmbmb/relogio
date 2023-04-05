function relogio() {
     const elementoRelogio = document.querySelector('.relogio');
     const horaAtual = new Date();
     const horas = horaAtual.getHours();
     const minutos = horaAtual.getMinutes();
     const segundos = horaAtual.getSeconds();

     const formatoHoras = horas.toString().padStart(2, "0");
     const formatoMinutos = minutos.toString().padStart(2, "0");
     const formatoSegundos = segundos.toString().padStart(2,"0");

     elementoRelogio.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;

     const frase = document.querySelector('.frase');

     dia = new Array('domimgo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sabado' );

     mes = new Array('janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro');
     
     hoje = new Date

     frase.innerHTML =`${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2,'05')} de ${mes[hoje.getMonth()]} de 2023`
     
}

setInterval(relogio, 1000);
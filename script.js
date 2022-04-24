let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

// criação de um timer para rodar a função de 1s em 1s
function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // configuração para colocar as horas no relogio digital
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90; // calculando os segundos
    let mDeg = ((360 / 60) * minute) - 90; // minutos
    let hDeg = ((360 / 12) * hour) - 90; //horas

    // relogio analigico
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

// função utilizada para fixar o zero quando o numero for menos do que 10
function fixZero(time) {
    // if (time < 10) {
    //     return '0'+time;
    // } else {
    //     return time;
    // }

    // segunda forma de representação em apenas uma unica linha
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000); //funcão para criar um intervalo infinito, ira rodar a função a cada 1s
updateClock(); // alocada para ter um efeito imadiato do horario atualizado
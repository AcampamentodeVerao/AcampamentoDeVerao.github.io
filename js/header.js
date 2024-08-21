function definirBackgroundHeader() {

    let header = document.getElementById('header')
    let nav = document.getElementById('nav')

    let now = new Date();
    let hours = now.getHours();
    // let hours = 12;

    // Definindo o intervalo de horas para o dia e a noite
    if (hours >= 6 && hours < 18) {
        // Entre 6:00 e 17:59
        header.classList.add('background-day');
        header.classList.remove('background-night');

        nav.classList.add('background-day');
        nav.classList.remove('background-night');

    } else {
        // Entre 18:00 e 5:59
        header.classList.add('background-night');
        header.classList.remove('background-day');

        nav.classList.add('background-night');
        nav.classList.remove('background-day');
    }

    console.log(hours);

}

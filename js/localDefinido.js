// const localizacao = {

//     definido: true,

//     nome: 'Villa Luna - Espaço para Eventos',

//     endereco: 'Av. Antônio da Silva Espíndola, Chácara 3 e 4, Goiânia - GO',

//     mapa: 'https://www.google.com/maps/embed?...'

// };

const localizacao = {

    definido: false,

    nome: 'EM BREVE',

    endereco: 'O endereço do acampamento será divulgado em breve.',

    mapa: 'https://www.google.com/maps/embed?...'

};

const nomeLocal =
    document.getElementById('nomeLocal');

const enderecoLocal =
    document.getElementById('enderecoLocal');

const mapa =
    document.getElementById('mapa');

const placeholder =
    document.getElementById('placeholderMapa');

const cardEndereco =
    document.querySelector('#localizacao .endereco');

nomeLocal.innerHTML =
    `∙ ${localizacao.nome}`;

enderecoLocal.innerHTML =
    `∙ ${localizacao.endereco}`;

if (localizacao.definido) {

    mapa.src = localizacao.mapa;

    mapa.style.display = 'block';

    placeholder.style.display = 'none';

    cardEndereco.classList.add('local-definido');

} else {

    mapa.style.display = 'none';

    placeholder.style.display = 'flex';

}
function mandarMensagem(numero, nomeDiretorJovem) {

    const diretorJovem = nomeDiretorJovem
    
    const mensagem = `Olá ${diretorJovem}, quero saber mais informações sobre o Acampamento de Verão 2025!`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');

}
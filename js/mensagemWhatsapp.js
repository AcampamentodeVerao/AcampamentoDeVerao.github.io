function mandarMensagem(numero, nomeDiretorJovem, arquivoHTML) {

    if (arquivoHTML == 'pagina principal') {

        const diretorJovem = nomeDiretorJovem
    
        const mensagem = `Olá ${diretorJovem}, quero saber mais informações sobre o Acampamento de Verão 2026!`;

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');
        
    } else if (arquivoHTML == 'garanta sua vaga') {

        const diretorJovem = nomeDiretorJovem
    
        const mensagem = `Olá ${diretorJovem}, quero enviar o comprovante de pagamento para concluir a minha inscrição do Acampamento de Verão!`;

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');
        
    } else {

        alert('ERRO AO ENVIAR A MENSSAGEM! INFORME IMEDIATAMENTE ESTE ERRO AO SEU DIRETOR(A) JOVEM!')

    }
    
}

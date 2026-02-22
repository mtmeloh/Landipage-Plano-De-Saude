function abrirWhatsApp() {
    const numero = "777777"; 
    const mensagem = "Olá! Quero uma cotação de plano de saúde em Curitiba.";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

function enviarFormulario(event) {
    event.preventDefault();
    abrirWhatsApp();
}
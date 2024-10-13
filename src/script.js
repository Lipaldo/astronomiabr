// Simulação de dados de eventos astronômicos
const eventos = [
    {
        nome: "Eclipse Solar Total",
        data: "08 de Abril, 2024",
        local: "América do Norte"
    },
    {
        nome: "Chuva de Meteoros Perseidas",
        data: "12 de Agosto, 2024",
        local: "Visível Globalmente"
    },
    {
        nome: "Alinhamento de Júpiter e Saturno",
        data: "20 de Setembro, 2024",
        local: "Visível com Telescópio"
    }
];

// Carrega os eventos na página
window.onload = function() {
    const listaEventos = document.getElementById('eventos-lista');
    eventos.forEach(evento => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${evento.nome}</strong><br>Data: ${evento.data}<br>Local: ${evento.local}`;
        listaEventos.appendChild(li);
    });
};

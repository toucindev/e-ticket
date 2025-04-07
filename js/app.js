let databaseTicket = {
    pista: 100,
    superior: 200,
    inferior: 400
};

function comprar() {

    let selectedKey = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida (maior que zero).');
        return;
    }

    if (!databaseTicket.hasOwnProperty(selectedKey)) {
        alert('Tipo de ingresso selecionado é inválido. Tente novamente.');
        return;
    }

    if (databaseTicket[selectedKey] < quantidade) {
        alert(`Não temos ingressos suficientes para "${selectedKey.toUpperCase()}". Disponível: ${databaseTicket[selectedKey]}.`);
        return;
    }

    databaseTicket[selectedKey] -= quantidade;

    document.getElementById(`qtd-${selectedKey}`).textContent = `${databaseTicket[selectedKey]}`;
}

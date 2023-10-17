function comprar() {

    // Coletar dados digitados
    let campoSelecao = document.getElementById("tipo-ingresso").value;
    let quantidade = document.getElementById("qtd").value;
    console.log(campoSelecao);
    console.log(quantidade);
    // Coletar quantidade de ingressos disponíveis
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    console.log(qtdPista);
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    console.log(qtdSuperior);
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    console.log(qtdInferior);
    // Comparar com a quantidade de ingressos disponíveis
    listaIngressos = ["pista", "superior", "inferior"];
    listaQuantidade = [qtdPista, qtdSuperior, qtdInferior];
    for (let i = 0; i < listaIngressos.length; i++) {
        console.log(campoSelecao);
        console.log(listaIngressos[i]);
        console.log(listaQuantidade[i]);
        if (campoSelecao == listaIngressos[i]) {
            // Diminuir a quantidade disponível de ingressos se tiver ou mandar alert informando q ñ tem ingresso disponível
            if (quantidade > listaQuantidade[i]) {
                quantidade = quantidade - listaQuantidade[i];
                alert(`Quantidade de ingressos solicitados excede em ${quantidade} de ingressos disponíveis!`);
            } else {
                listaQuantidade[i] = listaQuantidade[i] - quantidade;
                // Atualizar a quantidade de ingressos disponíveis
                document.getElementById(`qtd-${listaIngressos[i]}`).textContent = listaQuantidade[i];
            }
        }
    }
    document.getElementById("qtd").value = 0;
}


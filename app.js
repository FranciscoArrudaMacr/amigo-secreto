const listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    let embaralhado = [...listaAmigos];
    let sorteio = {};

    do {
        embaralhado = embaralhado.sort(() => Math.random() - 0.5);
    } while (embaralhado.some((amigo, index) => amigo === listaAmigos[index]));

    listaAmigos.forEach((amigo, index) => {
        sorteio[amigo] = embaralhado[index];
    });

    exibirResultado(sorteio);
}

function exibirResultado(sorteio) {
    const ul = document.getElementById("resultado");
    ul.innerHTML = "";

    for (const [amigo, sorteado] of Object.entries(sorteio)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} -> ${sorteado}`;
        ul.appendChild(li);
    }
}

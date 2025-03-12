//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    if (nome) {
        amigos.push(nome);
        document.getElementById("amigo").value = "";
        mostrarLista();
    }
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos 1 amigo!");
        return;
    }
    
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    let item = document.createElement("li");
    item.textContent = sorteado;
    resultado.appendChild(item);
}


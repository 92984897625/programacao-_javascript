const diviniciar = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")

const perguntas = [ 
    "Qual é o maior deserto do mundo?",
    "Qual é a capital do Brasil?",
    "Qual é a capital da Austrália?",
    "Qual é o país com maior população no mundo?",
    " Qual a linha imaginária que atravessa o Brasil?",
    "Qual o oceano que banha o Brasil?",
]

function iniciarjogo() {
    fecharbotaoinicio()
    abrirareajogo()
}

function fecharbotaoinicio() {
    diviniciar.innerHTML = ""
}

function abrirareajogo() {
divareajogo.classList.add("active")

let botaodepergunta = document. createElement("button")
botaodepergunta.textContent = perguntas[0]
areaperguntas.appendChild(botaodepergunta)
}
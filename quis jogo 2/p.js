const diviniciar = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")
const titulopergunta = document.getElementById("titulopergunta")

const perguntas = [ 
    {pergunta: "Qual é o maior deserto do mundo?", opcoes:["Saara", "Antartida", "Atacãma"], correta:"Antartida"},
    {pergunta: "Qual é a capital do Brasil?", opcoes:["RJ", "SP", "Brasilia"], correta:"Brasilia"},
    {pergunta: "Qual é a capital da Austrália?", opcoes:["palhoça", "urubici", "canguru"], correta:"canguru"},
    {pergunta: "Qual é o país com maior população no mundo?", opcoes:["china", "india", "paraguai"], correta:"india"},
    {pergunta: "Qual a linha imaginária que atravessa o Brasil?", opcoes:["Pan", "Atlantida", "Capricornio"], correta:"Pan"},
    {pergunta: "Qual o oceano que banha o Brasil?", opcoes:["Atlantico", "Pacifico", "Indico"], correta:"Pacifico"},
]
let indiceperguntas = 0
let botaodepergunta = document.createElement("button")
e
function iniciarjogo() {
    fecharbotaoinicio()
    abrirareajogo()
}

function fecharbotaoinicio() {
    diviniciar.innerHTML = ""
}

function abrirareajogo() {
    divareajogo.classList.add("active")
    
    titulopergunta.textContent = perguntas[indiceperguntas].pergunta
    areaperguntas.innerHTML = ""
perguntas[indiceperguntas].opcoes.forEach(opcao => {
    let botaodepergunta = document.createElement("button")
    botaodepergunta.textContent = opcao
    botaodepergunta.classList.add("answer-btn")
    botaodepergunta.addEventListener("click",() => Validarrespostacorreta(opcao))
    areaperguntas.appendChild(botaodepergunta)
})
}

function Validarrespostacorreta(btaoSelecionado) {
   const botaodatela = document.querySelector(".answer-btn")
   const respostacorreta = perguntas(indiceperguntas).correta
   botaodatela.forEach(botao => {
    if(botao.textContent === respostacorreta) {
        botao.classList.add("correct")
        botao.classList.add("disabled")
    }
    if(botao.textContent === btaoSelecionado && botao.textContent != respostacorreta) {
        botao.classList.add("incorrect")
        botao.classList.add("disabled")
    }
   })
}

function proximapergunta() {
    indiceperguntas++
    if(indiceperguntas < perguntas.length)
        abrirareajogo()
    else
    alert("sem perguntas :\(")
}
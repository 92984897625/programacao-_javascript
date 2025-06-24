const diviniciar = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")
const titulodapergunta = document.getElementById("titulopergunta")
const btnIniciar = document.getElementById("botaoiniciar")
const pxmProximo = document.getElementById("botaoProximo")

// "mouseover"  "click"
btnIniciar.addEventListener("mouseover", iniciarjogo)
pxmProximo.addEventListener("click", proximapergunta)
// pxmProximo.disabled = true

const perguntas = [
    {pergunta:"Qual é o maior deserto do mundo?", opcoes:["saara","antartida","atacama","chile"], correta:"antartida"},
    {pergunta:"Qual é a capital do Brasil?", opcoes:["RJ","SP","Brasilia","chile"], correta:"Brasilia"},
    {pergunta:"Qual é a capital da Austrália?", opcoes:["Palhoça","urubici","Canguru","chile"], correta:"Canguru"},
    {pergunta:"Qual é o país com maior população no mundo?", opcoes:["China","India","Paraguai","chile"], correta:"India"},
    {pergunta:"Qual a linha imaginária que atravessa o Brasil?", opcoes:["Anemia","Atlantida","Capricornio","chile"], correta:"Atlantida"},
    {pergunta:"Qual o oceano que banha o Brasil?", opcoes:["Atlantico","Pacifico","Indico","chile"], correta:"Pacifico"},
]
let indiceperguntas = 0
let botaodepergunta = document.createElement("button")


/* Funções */
function iniciarjogo(){
    fecharbotaoinicio()
    abrirareajogo()
}

function fecharbotaoinicio(){
    diviniciar.innerHTML = " "
}

function abrirareajogo(){
    divareajogo.classList.add("active")
    pxmProximo.disabled = true

    titulodapergunta.textContent = perguntas[indiceperguntas].pergunta
    areaperguntas.innerHTML = ""

    perguntas[indiceperguntas].opcoes.forEach(opcao => {
    let botaodepergunta = document.createElement("button")
    botaodepergunta.textContent = opcao
    botaodepergunta.classList.add("answer-btn")
    botaodepergunta.addEventListener("click", () => validarrespostacorreta(opcao))

    areaperguntas.appendChild(botaodepergunta)
 })
}

function validarrespostacorreta(btnSelecionado){
    const botoesdaTela = document.querySelectorAll(".answer-btn")    
    const respostacorreta = perguntas[indiceperguntas].correta
    botoesdaTela.forEach(botao => {
        if(botao.textContent === respostacorreta){
            botao.classList.add("correct")
        }
        if(botao.textContent === btnSelecionado && botao.textContent != respostacorreta){
            botao.classList.add("incorrect")
        }
        botao.classList.add("disable")
        botao.disabled = true
    })
    if (btnSelecionado === respostacorreta) {
        contadorrespostascorretas++
        console.log(contadorrespostascorretas)
    }
    pxmProximo.disabled = false
}


function proximapergunta(){
    indiceperguntas++
    if (indiceperguntas < perguntas.length)
        abrirareajogo()
    else{
        encerrarJogo()
    }
}

function encerrarJogo() {
    alert(contadorrespostascorretas)
}
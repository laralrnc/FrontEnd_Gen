let nome = window.document.getElementById("nome")
let email = document.getElementById("email")
let indicacao = document.getElementById("indicacao")

function clique(){
    alert("Você clicou no botão")
}

function verificaCampos(){
    if(nome.value == "" || email.value == "" || indicacao.value == "")
    {
        alert("Preencha todos os campo")
    }
    else{
        alert("Enviado!")
    }
}
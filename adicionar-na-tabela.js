let valorNome;
let valorPeso;
let valorAltura;
let td;
let tr;

const tabela = document.querySelector("#tabela-imc")
const tBody = document.querySelector("#corpo-tabela")
function aoEnviar() {
    montaTr()
    tBody.appendChild(montaTr())
    tabela.appendChild(tBody)
    alert("É POSSÍVEL APAGAR UM ITEM DA TABELA COM O DUPLO CLICK SOBRE O NOME DA PESSOA!")
    
    form.reset()
    
}









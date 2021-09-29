const botaoPesquisar = document.querySelector("#botao-pesquisar")
botaoPesquisar.addEventListener("click", ()=>{
    const requisicao = new XMLHttpRequest;
    requisicao.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    
    requisicao.addEventListener("load", ()=>{
        const resposta = requisicao.responseText;
    
        const alunosAdd = JSON.parse(resposta)
        console.log(alunosAdd)

        alunosAdd.forEach(element => {
            
           montaTrAdd(element.nome, element.peso, element.altura);
           tBody.appendChild(montaTrAdd(element.nome, element.peso, element.altura))
           tabela.appendChild(tBody)
           
        });
        
    })
    requisicao.send()
})


function montaTrAdd(nome, peso, altura) {

    tr = document.createElement("tr");
    tr.classList.add("aluno")
    tr.appendChild(montaTd(nome))
    tr.appendChild(montaTd(peso > 0 && peso < 150 ? peso : "Peso invalido "));
    tr.appendChild(montaTd(altura > 0 && altura < 3.00 ? altura : "Altura invalida!"));
    tr.appendChild(montaTd(altura > 0 && altura < 3.00 && peso > 0 && peso < 150 ?
        calculaImc(altura, peso) : "Algo deu errado!"
    ))

    return tr;
}


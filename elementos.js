
function montaTd(valor) {

    let td = document.createElement("td")
    td.textContent = valor;
    return td;

}

function montaTr() {

    tr = document.createElement("tr");
    tr.classList.add("aluno")
    tr.appendChild(montaTd(valorNome))
    tr.appendChild(montaTd(valorPeso > 0 && valorPeso < 150 ? valorPeso : "Peso invalido"));
    tr.appendChild(montaTd(valorAltura > 0 && valorAltura < 3.00 ? valorAltura : "Altura invalida!"));
    tr.appendChild(montaTd(valorAltura > 0 && valorAltura < 3.00 && valorPeso > 0 && valorPeso < 150 ?
        calculaImc(valorAltura, valorPeso) : "Algo deu errado!"
    ))

    return tr;
}






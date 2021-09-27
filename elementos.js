function montaTd(valor) {

    let td = document.createElement("td")
    td.textContent = valor;
    return td;

}

function montaTr() {
    
    tr = document.createElement("tr")
    tr.appendChild(montaTd(valorNome))
    tr.appendChild(montaTd(valorPeso > 0 && valorPeso < 150? valorPeso : "Peso invalido"));
    tr.appendChild(montaTd(valorAltura));
    tr.appendChild(montaTd(calculaImc(valorAltura, valorPeso)))
  
    return tr;
}


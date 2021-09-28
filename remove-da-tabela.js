
tabela.addEventListener("dblclick", function(event) {
   
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);

});


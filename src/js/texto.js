function diminuirLetra() {
    var e = (e = document.getElementById("Conteudo").style.fontSize).replace("px", "");
    document.getElementById("Conteudo").style.fontSize = "" == e ? "11px" : parseInt(e) - 1 + "px"
}

function aumentarLetra() {
    var e = (e = document.getElementById("Conteudo").style.fontSize).replace("px", "");
    document.getElementById("Conteudo").style.fontSize = "" == e ? "13px" : parseInt(e) + 1 + "px"
}
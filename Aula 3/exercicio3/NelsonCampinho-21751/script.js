function getInfo(){
    var link = document.getElementById("link");
    var lists = document.getElementById("info");

    lists.innerHTML =
        "ID:" + link.id + "<br>" +
        "Target:" + link.target + "<br>" +
        "Type:" + link.type + "<br>" +
        "href:" + link.href + "<br>";
}

function changeColorToRed(){
    var titles = document.getElementsByClassName("titulo");
    for(let title of titles){ //temos 2 iterações
        title.style.color = "red";
    }
}

function onClickOfCell(cell) {
    cell.innerText = prompt("Novo valor?"); //mensagem de pergunta para o utilizador
    cell.style.backgroundColor = "green";
}

function setClickCell(){
    var cells = document.getElementsByTagName("td");
    for(let cell of cells){
        cell.onclick = function(){
            onClickOfCell(cell)
        }
    }
}

//Função que coloca tabela clicável
setClickCell();
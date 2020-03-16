var counterImages = 0;

function addImage(){
    var image = document.createElement("img");
    var list = document.getElementById("imagesList")

    image.src = "https://placeimg.com/250/150/" + counterImages;
    list.appendChild(image);

    counterImages++;

    var counter = document.getElementById("imageCounter");
    counter.innerText = counterImages.toString();


}

function removeImage(){
    var list = document.getElementById("imagesList")
    var num = Math.floor(Math.random() * counterImages)+1
    //Math.floor --> numero inteiro
    //math.random --> numero decimal random entre 0 e o numero de imagens

    list.removeChild(list.childNodes[num]);
    console.log(num)

    counterImages--;

    //número de elementos
    var counter = document.getElementById("imageCounter");
    counter.innerText = counterImages.toString();


}
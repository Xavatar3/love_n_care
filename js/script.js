let imageNum = 1
let maxImages = 6
let prev = document.getElementById("prev")
function prv(){
    document.getElementById("im").src = `images/${imageNum}.jpg`
    if(imageNum==1){
        imageNum=maxImages
        return
    }
    imageNum--
}
prev.addEventListener("click",prv)
let next = document.getElementById("next")
function nxt(){
    document.getElementById("im").src =`images/${imageNum}.jpg`
    if(imageNum==maxImages){
        imageNum=1
        return
    }
    imageNum++
}
next.addEventListener("click",nxt)

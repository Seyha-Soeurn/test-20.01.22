let showImage = () => {
    let disImg = document.getElementsByClassName("card");
    for (let index in disImg) {
        disImg[index].style.display = "block";
    }
}
let hideImage = () => {
    let hideImg = document.getElementsByClassName("card");
    for (let index in hideImg) {
        hideImg[index].style.display = "none";
    }
}

let btnShow = document.getElementById("btn-show");
let btnHide = document.getElementById("btn-hide");

btnHide.addEventListener('click', hideImage);
btnShow.addEventListener('click', showImage);

let btnOpen = document.getElementById("open");
let btnClose = document.getElementById("close");
let list = document.getElementById("list");

btnOpen.onclick = () => {
    btnOpen.classList.add('hide')
    btnClose.classList.remove('hide')
    list.classList.remove('hide')
}
btnClose.onclick = () => {
    btnOpen.classList.remove('hide')
    btnClose.classList.add('hide')
    list.classList.add('hide')
}
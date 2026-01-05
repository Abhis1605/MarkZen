// get sidebar and overlay using dom

const sideBar = document.querySelector(".sidebar")
const overLay = document.querySelector(".overlay")

function closeSideBar(){
    sideBar.classList.remove('active')
    overLay.classList.remove('active')
}
function openSideBar(){
    sideBar.classList.add('active')
    overLay.classList.add('active')
}
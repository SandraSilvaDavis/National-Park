//inject current year in footer 
const rightNow = new Date();
console.log(rightNow.getFullYear())
document.querySelector('#year').textContent = rightNow.getFullYear();
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");

}
    const x = document.getElementById("hamburguerBtn");

x.onclick= toggleMenu;
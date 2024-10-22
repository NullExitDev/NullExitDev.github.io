//获取元素
var openLogin = document.querySelector('.btn_box').querySelector('.log')
var container = document.querySelector(".container")
var exitContainer = document.querySelector(".exit_btn")
var mask = document.querySelector('.mask')
document.addEventListener('contextmenu', function (e) {
    e.preventDefault()
})
//粒子
var particles = Particles.init({
    selector: '.particle',
    color: '#fff',
    maxParticles: 25,
    speed: .07,
    sizeVariations: 2
})
//事件监听
openLogin.addEventListener('click', function () {
    container.style.display = "block"
    mask.style.display = 'block'
})
exitContainer.addEventListener('click', function () {
    container.style.display = "none"
    mask.style.display = 'none'
})
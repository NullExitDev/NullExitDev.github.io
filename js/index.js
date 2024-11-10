let copyWriter = document.querySelector('.b-text')

let particles = Particles.init({
    selector: '.particle',
    color: '#fff',
    maxParticles: 40,
    speed: .07,
    sizeVariations: 2
})

axios({
    url: 'https://v1.jinrishici.com/rensheng.txt'
}).then(result => {
    let str = result.data.toString()
    copyWriter.innerHTML = str.slice(0, str.length - 1)
})
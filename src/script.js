import './style/main.scss'

const images = [
    "js-square.svg",
    "angular.svg",
    "reactjs.svg",
    "nodejs.svg",
    "html-5.svg",
    "css3.png",
    "git.svg",
    "python.svg",
    "npm.svg",
    "php.svg",
    "c_logo.svg",
    "mysql.svg",
    "os-linux.png",
    "bootstrap.svg",
    "sass.png",
    "stylus.svg",
    "webpack.svg"
]
let arrayImage = [];
images.map(item => {
    const img = document.createElement("img")
    img.src = `./assets/images/${item}`
    img.alt = item
    img.className = "tech-container__img"
    arrayImage.push(img)
})
console.log(arrayImage)
const tech = document.querySelector(".tech-container")
tech.append(...arrayImage)

console.log(sayHello());
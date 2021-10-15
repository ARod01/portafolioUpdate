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

console.log(arrayImage);

const projectItems = [
    {
        image: "calories.png",
        title: "Editar DOM con Javascript",
        description: "JS, CSS, Webpack",
        repository: "https://github.com/ARod01/caloriesCalculator",
        url: "https://foodcalculator.surge.sh/"
    },
    {
        image: "landing.png",
        title: "Landing demo usando React",
        description: "ReactJS, Bootstrap",
        repository: "https://github.com/ARod01/landingPage",
        url: "https://landingpageexcercise.netlify.app/"
    },
    {
        image: "batata.png",
        title: "Ejemplo de movil first",
        description: "JS, media query, Stylus",
        repository: "https://github.com/ARod01/movilfirstbatata/tree/main/css",
        url: "https://demofirstmovil.netlify.app/"
    },
    {
        image: "rabbits.png",
        title: "Animaciones",
        description: "JS, media query",
        repository: "https://github.com/ARod01/rabbitgame",
        url: "https://rabbitgame.netlify.app/"
    },
]
let arrayProject = [];
projectItems.map(item => {
    const container = document.createElement("div")
    container.className = "project-container__item"
    const img = document.createElement("img")
    img.src = `./assets/images/${item.image}`
    img.alt = item.image
    const title = document.createElement("p")
    title.textContent = item.title
    const description = document.createElement("p")
    description.textContent = item.description
    const repository = document.createElement("p")
    repository.textContent = item.repository
    const url = document.createElement("p")
    url.textContent = item.url
    container.append(img, title, description, repository, url)
    arrayProject.push(container)
})
console.log(arrayProject)
const project = document.querySelector(".project-container")
project.append(...arrayProject)
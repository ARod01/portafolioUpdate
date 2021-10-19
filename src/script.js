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
const tech = document.querySelector(".tech-container")
tech.append(...arrayImage)


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
    const imageProject = document.createElement("img")
    imageProject.src = `./assets/images/${item.image}`
    const card = document.createElement("div")
    const title = document.createElement("h3")
    title.textContent = item.title
    const description = document.createElement("p")
    description.textContent = item.description
    const repo = document.createElement("a")
    repo.textContent = "Repositorio"
    repo.href = item.repository
    repo.rel = "noopener"
    repo.target="_blank"
    const url = document.createElement("a")
    url.textContent = "Ver sitio"
    url.href = item.url
    url.rel = "noopener"
    url.target="_blank"
    card.append(title, description, repo, url)
    container.append(imageProject, card)
    arrayProject.push(container)
})
const project = document.querySelector(".project-container")
project.append(...arrayProject)
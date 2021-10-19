import './style/main.scss'
import './images'
import imagesContact from './images';
import imagesTech from './tech'
import projectItems from './project'

let arrayImage = [];
imagesTech.map(item => {
    const img = document.createElement("img")
    img.src = `./assets/images/${item}`
    img.alt = item
    img.className = "tech-container__img"
    arrayImage.push(img)
})
const tech = document.querySelector(".tech-container")
tech.append(...arrayImage)


let arrayProject = [];
projectItems.map(item => {
    const container = document.createElement("div")
    container.className = "project-container__item"
    const imageProject = document.createElement("img")
    imageProject.src = `./assets/images/${item.image}`
    imageProject.alt = item.title
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

const linkedin = document.querySelector("#linkedin")
linkedin.src = `./assets/icons/${imagesContact[0]}`
const platzi = document.querySelector("#platzi")
platzi.src = `./assets/icons/${imagesContact[1]}`
const github = document.querySelector("#github")
github.src = `./assets/icons/${imagesContact[2]}`
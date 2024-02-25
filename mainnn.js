
const agendar = document.querySelector(".btn-agendar")
const  elementoAgenda = document.querySelector(".agenda")

agendar.addEventListener("click", () => {
    elementoAgenda.classList.toggle("ativo")

    elementoPaciente.classList.remove("ativo")
    elementoProfissional.classList.remove("ativo")
    elementoHome.classList.remove("ativo")
})

const paciente = document.querySelector(".btn-paciente")
const elementoPaciente = document.querySelector(".paciente")

paciente.addEventListener("click", () => {
    elementoPaciente.classList.toggle("ativo")

    elementoAgenda.classList.remove("ativo")
    elementoProfissional.classList.remove("ativo")
    elementoHome.classList.remove("ativo")
})


const profissional = document.querySelector(".btn-profissional")
const elementoProfissional = document.querySelector(".profissional")

profissional.addEventListener("click", () => {
    elementoProfissional.classList.toggle("ativo")

    elementoAgenda.classList.remove("ativo")
    elementoPaciente.classList.remove("ativo")
    elementoHome.classList.remove("ativo")
})

const home = document.querySelector(".btn-home")
const elementoHome = document.querySelector(".home")

home.addEventListener("click", () => {
    elementoHome.classList.toggle("ativo")

    elementoAgenda.classList.remove("ativo")
    elementoPaciente.classList.remove("ativo")
    elementoProfissional.classList.remove("ativo")
})
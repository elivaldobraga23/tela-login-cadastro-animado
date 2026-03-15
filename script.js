const main = document.querySelector("main")
const btnRegistro = document.querySelector(".registrar-btn")
const btnLogin = document.querySelector(".login-btn")

btnRegistro.addEventListener("click", () => {
    main.classList.add("active")
})

btnLogin.addEventListener("click", () => {
    main.classList.remove("active")
})
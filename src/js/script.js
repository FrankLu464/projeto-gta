const buttonPlataform = document.querySelector(".btn-plataforma");
const elementPlataforms = document.querySelector(".btn-plataforma .plataformas");

buttonPlataform.addEventListener("click", () => { 
    elementPlataforms.classList.toggle("ativo");

/*
if(elementPlataforms.classList.contains("ativo")) {
    elementPlataforms.classList.remove("ativo");
} else {
    elementPlataforms.classList.add("ativo");
}
*/
});
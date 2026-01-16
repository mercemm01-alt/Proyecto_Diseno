const links = document.querySelector("#links");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    links.classList.add("visible");
});

cerrar.addEventListener("click", () =>{
    links.classList.remove("visible");
})
import saludar from "./saludor";
const nombreIn = document.querySelector("#nombre");
const saludoDiv = document.querySelector("#saludo-div");
const saludoForm = document.querySelector("#form-saludo");

saludoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreIn.value;

  saludoDiv.innerHTML = "<p>" + saludar(nombre) + "</p>";

});
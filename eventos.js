document.addEventListener("DOMContentLoaded", function() {
  const miBoton = document.getElementById('miBoton');
const miDiv = document.getElementById('miDiv');

function handleClickButton(event) {
  alert('¡Hiciste clic en el botón!');
  event.stopPropagation(); // Detiene la propagación del evento
}

function handleClickDiv() {
  alert('¡Hiciste clic en el div!');
}

miBoton.addEventListener('click', handleClickButton);
miDiv.addEventListener('click', handleClickDiv);
});
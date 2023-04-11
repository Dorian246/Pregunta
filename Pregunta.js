
const form = document.querySelector('form');
const pregunta = form.querySelector('#pregunta');


form.addEventListener('submit', (event) => {
	event.preventDefault(); 
	const respuesta = obtenerRespuesta(pregunta.value); 
	mostrarRespuesta(respuesta); 
});

function obtenerRespuesta(pregunta) {
	
	const respuestas = ['Sí', 'No', 'Tal vez', 'Es posible', 'No lo sé', 'Probablemente'];
	return respuestas[Math.floor(Math.random() * respuestas.length)];
}


function mostrarRespuesta(respuesta) {
	const divRespuesta = document.querySelector('#respuesta');
	divRespuesta.innerHTML = `<p>Respuesta: ${respuesta}</p>`;
}

// Funciones para generar los colores

function generateValue() {
	return Math.floor((Math.random() * 255) + 1);
}

function generateColor() {
	const r = generateValue();
	const b = generateValue();
	const g = generateValue();
	const color = `rgb(${r}, ${b}, ${g})`;
	return color;
}

export { generateColor };
// cada instancia Producto representaría un control de stock de cierto tipo de producto.

export class Producto { 

	#precio
	#nombre
	#categoria

	constructor(precio, nombre, categoria, cantidad) {
		this.precio = precio 
		this.nombre = nombre
		this.categoria = categoria
		this.cantidad = cantidad
	}

	

	// set precio(nuevoPrecio) {
		// this.#precio = nuevoPrecio
		// console.log("Modificado precio a: "+nuevoPrecio)
	// }
// 
	// set nombre(nuevoNombre) {
		// this.#nombre = nuevoNombre
		// console.log("Modificado nombre a: "+nuevoNombre)
	// }
	// 
	// get nombre() {
		// return this.#nombre
	// }
// 
	// get precio() {
		// return this.#precio
	// }

	// get categoria() {
		// return this.#categoria
	// }
}

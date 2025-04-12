// cada instancia Producto representaría un control de stock de cierto tipo de producto.

export class Producto { 

	#precio
	#nombre
	#categoria
	

	constructor(precioBase, nombre, categoria, cantidad) {
		this.precioBase = precioBase
		this.nombre = nombre
		this.categoria = categoria
		this.cantidad = cantidad
	}

	aumentarPrecioBase(precio) {
		this.precioBase += precio
	}
	
	get precioFinal() {
		return this.precioBase
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

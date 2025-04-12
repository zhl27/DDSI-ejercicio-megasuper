// un producto en carrito

export class ItemCarrito {

	// Luego de que un ItemCarrito es efectivamente comprado, las propiedades "nombre" y "precioBase" deber convertise en inmutables. Deben representar una snapshot del instante de compra
	#nombre 	
	#precioBase
	#precioFinal

	constructor(producto, cantidad) {
		this.#nombre = producto.nombre
		this.#precioBase = producto.precio
		producto.cantidad -= cantidad // se debe descontar del stock
		this.descuentos = []
	}

	agregarDescuento(nuevoDescuento) {
		this.descuentos.push(nuevoDescuento)
	}

	get precioFinal() {
		const precioBaseTotal = this.#precioBase * this.cantidad
		const precioConDescuentos = this.descuentos.reduce( // method reduce() is like a Haskell foldl function, it accumulates the effect on an initial value (the seed)
			(precioAnterior, descuento) => precioAnterior - descuento.valorDescontado(precioBaseTotal, this.cantidad) // single-expressions can be declared without braces and the return is implicit
			, precioBaseTotal
		)
		return precioConDescuentos
	}
	
	

	
}

export class Producto {

	#precioBase;  // this defines precioBase as a private variable
	#precioFinal;

	constructor(precioBase, nombre, cantidad) {
		this.#precioBase = precioBase 
		this.nombre = nombre
		this.cantidad = cantidad
		this.descuentos = []
	}

	agregarDescuento(nuevoDescuento) {
		this.descuentos.push(nuevoDescuento)
	}
	
	// private variables need getters and setters

	get precioBase() {
		return this.#precioBase
	}

	set precioBase(nuevoPrecio) {
		this.#precioBase = nuevoPrecio + 10
	}

	get precioFinal() {
		const precioBaseTotal = this.#precioBase * this.cantidad;
		return this.descuentos.reduce( // method reduce() is equivalent to a Haskell foldl function, it accumulates the effect on an initial value (the seed)
			(precioAnterior, descuento) => {
				precioAnterior - descuento.valorDescontado(precioBaseTotal, this.cantidad)
			}, precioBaseTotal
		);
	}
}

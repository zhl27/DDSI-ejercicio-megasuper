		// esto es una funcion constructora --> la que va a instanciar nuestro objeto
function ProductoFuncionConstructora(precio, nombre) {
	this.precio = precio; 
	this.nombre = nombre;
}

// for (let i=0; i<10; i++) {
	// let producto = new ProductoFuncionConstructora(i, "coca-cola "+i);
	// console.log(producto);
// }

export class DescuentoFijo {

	constructor(valor) {
		this.valor = valor
	}

	// calcula un valor de descuento en base al precio base y a la cantidad de producto
	valorDescontado(_, __) {
		return this.valor
	}
}

export class DescuentoPorcentual {
	constructor(porcentaje) {
		this.porcentaje = porcentaje
	}

	valorDescontado(precioBase, _) {
		return precioBase * this.porcentaje / 100
	}
}

export class DescuentoPorCantidad {
	// X descuento en la N unidad 
	constructor(cantidadMinima, porcentaje) {
		this.cantidadMinima = cantidadMinima
		this.porcentaje = porcentaje
	}

	valorDescontado(precioBase, cantidad) {
		const vecesQueRepitioCantidadMinima = Math.floor(cantidad / this.cantidadMinima)
		if (vecesQueRepitioCantidadMinima >= 1) {
			return precioBase * (this.porcentaje / 100) * vecesQueRepitioCantidadMinima
		}
	}
}



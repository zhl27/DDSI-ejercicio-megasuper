export function getRandomNaturalNumber(min, max) {
  // Ensure the range is inclusive of min and max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function aumentarPreciosBase(listaProductos, nuevoPrecioBase) {
	listaProductos.forEach(producto => producto.aumentarPrecioBase(nuevoPrecioBase))
}

export function getPrecioFinalMasAlto(listaProductos) {
	return listaProductos.reduce((productoMasCaro, producto) => {
		if (productoMasCaro.precioFinal > producto.precioFinal) {
			return productoMasCaro.precioFinal
		}
		return producto.precioFinal
	}, 0)
}



import { Producto } from './Producto.js'

export const Categoria = {
	BEBIDA: 'bebida',
	GALLETITAS: 'galletitas',
	LIMPIEZA: 'limpieza',
}

export const Catalogo = {
	coca_cola: new Producto(100, "CocaCola", Categoria.BEBIDA, 10),
	pepsi_cola: new Producto(100, "PepsiCola", Categoria.BEBIDA, 10),
	oreo: new Producto(50, "Oreo", Categoria.GALLETITAS, 20),
	ariel: new Producto(200, "Ariel", Categoria.LIMPIEZA, 15),
	ayudin: new Producto(250, "Ayudin", Categoria.LIMPIEZA, 30),
}


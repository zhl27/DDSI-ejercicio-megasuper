import { Producto } from './Producto.js'

export const Categoria = {
	BEBIDA: 'bebida',
	GALLETITAS: 'galletitas',
	LACTEOS: 'lacteos'
}

export const Catalogo = {
	coca_cola: new Producto(100, "CocaCola", Categoria.BEBIDA, 10),
	pepsi_cola: new Producto(100, "PepsiCola", Categoria.BEBIDA, 10),
	oreo: new Producto(50, "Oreo", Categoria.GALLETITAS, 20),

}


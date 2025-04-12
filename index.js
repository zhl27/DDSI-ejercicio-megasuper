import { DescuentoFijo, DescuentoPorcentual, DescuentoPorCantidad } from './domain/Descuento.js';
import { Producto } from './domain/Producto.js'
import { Catalogo, Categoria } from './domain/Catalogo.js'
import { getRandomNaturalNumber, aumentarPreciosBase } from './functions.js';

import chalk from "chalk";
import figlet from "figlet";



const oxfordBlue = chalk.hex("#020122");
const bgOxfordBlue = chalk.bgHex("#020122");
const flax = chalk.hex("#EDD382");
const bgflax = chalk.bgHex("#EDD382");



// le paso el texto y me devuelve un ascii art del mismo
await figlet("MegaSuper", "5 Line Oblique",
(err, data) => {
	if (err) {
		console.log("Error al crear el ascii art.");
		console.dir(err);
		return;
	}
	console.log(bgflax(oxfordBlue(chalk.bold(data))));
	console.log(flax(bgOxfordBlue(chalk.bold(data))));
})



// producto.agregarDescuento(new DescuentoFijo(10))
// producto.agregarDescuento(new DescuentoPorcentual(35))
// producto.agregarDescuento(new DescuentoPorCantidad(2, 50))

console.log("CATALOGO DE PRODUCTOS DISPONIBLES")
for (const producto in Catalogo) {
	console.log("")
	console.log(Catalogo[producto])
}


const listaProductos = Object.values(Catalogo)

console.log(listaProductos)

aumentarPreciosBase(listaProductos, 1000)

console.log(listaProductos)



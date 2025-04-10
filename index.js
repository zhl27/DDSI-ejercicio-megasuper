import { DescuentoFijo, DescuentoPorcentual, DescuentoPorCantidad } from './domain/Descuento.js';
import { Producto } from './domain/Producto.js'
import { getRandomNaturalNumber } from './functions.js';

import chalk from "chalk";
import figlet from "figlet";



const bgOxfordBlue = chalk.bgHex("#020122");
const flax = chalk.hex("#EDD382");

// le paso el texto y me devuelve un ascii art del mismo
await figlet("MegaSuper", (err, data) => {
	if (err) {
		console.log("Error al crear el ascii art.");
		console.dir(err);
		return;
	}
	console.log(chalk.green.bgBlue(data)+'\n');
})


var producto = new Producto(100, "CocaCola", 10)
console.log(producto)

producto.agregarDescuento(new DescuentoFijo(10))
producto.agregarDescuento(new DescuentoPorcentual(35))
producto.agregarDescuento(new DescuentoPorCantidad(2, 50))

console.log(producto)

console.log(producto.precioFinal)

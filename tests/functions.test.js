import { aumentarPreciosBase, getPrecioFinalMasAlto } from '../functions.js'
import { Producto } from '../domain/Producto.js'


import { describe, test, expect} from "vitest"


function cloneObject(object) {
	return JSON.parse(JSON.stringify(object))
}

// Unit Test
describe('aumentarPreciosBase', () => {

  test('adds 1 + 2 to equal 3', () => {
	let catalogo = [
		new Producto(100, "CocaCola", "BEBIDA", 10),
	    new Producto(101, "PepsiCola", "BEBIDA", 10),
	    new Producto(102, "Oreo", "GALLETITAS", 20),
	]
	let catalogoCopia = cloneObject(catalogo)
	
	aumentarPreciosBase(catalogoCopia, 1000)

	for (let i=0; i<catalogo.length; i++) {
		expect(catalogo[i].precioBase + 1000)
		.toBe(catalogoCopia[i].precioBase)
	}

  })

  test('adds -1 + -1 to equal -2', () => {
    expect(
    	1 + 1	
    )
    .toBe(2)
  })
})

// describe('getPrecioFinalMasAlto', ()=>{
	// 
// })

import express from "express"
import "dotenv/config"




const app = express()

app.get("/healthcheck", (req, res) => {
	res.json({
		"status": "ok"
	})
})

app.get("/api/v1/productos", (req, res) => {
	const price_lt = req.query.price_lt // siempre recibimos strings a través de los querys

	if(!query_lt) {
		res.json(productos.map(p => {
			return {
				"precioBase": p.precioBase,
				"nombre": p.nombre
			}	
		})
	}
	
	// res.json(productos)
})

// uses env SERVER_PORT, but if non existent, then it fallbacks to default value 3000
const port = process.env.SERVER_PORT ?? 3000
app.listen(port, () => {
	console.log("Server listening to port 3000")
})

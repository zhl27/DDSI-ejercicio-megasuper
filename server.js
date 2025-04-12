import express from "express"

const app = express()

app.get("/healthcheck", (req, res) => {
	res.json({
		"status": "ok"
	})
})

// uses env SERVER_PORT, but if non existent, then it fallbacks to default value 3000
app.listen(process.env.SERVER_PORT ?? 3000, () => {
	console.log("Server listening to port 3000")
})

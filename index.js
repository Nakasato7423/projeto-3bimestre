import express from 'express'

const app = express()
const PORT = 3000
let items = []
let contador = 1

app.use(express.json())

//ROTA DE TESTE
app.get("/status", (req, res) => {
  res.json({message: "NIKOLA TESLA"})
})

//ENVIANDO DADOS PARA A API
app.post("/usuarios", (req, res) => {
const {nome} = req.body

const novoItem = {
  id: contador++,
  nome
}

items.push(novoItem)
res.status(201).json(novoItem)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
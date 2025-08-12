import express from 'express'

const app = express()
const PORT = 3000
let usuarios = []
let contador = 1

app.use(express.json())

//ROTA DE TESTE
app.get("/status", (req, res) => {
  res.json({message: "NIKOLA TESLA"})
})

//ENVIANDO DADOS PARA A API
app.post("/usuarios", (req, res) => {
  const id = parseInt(req.params.id)
  const ususario = usuarios.find((i) => i.id === id)
  const {nome} = req.body



if(!usuario){
  return res.status(404).json({erro: "Usuario não encontrado"})
}


const novoUsuario = {
  id: contador++,
  nome
}

usuarios.push(novoUsuario)
res.status(201).json(novoUsuario)

usuario.nome = nome
res.json(usuario)
})

app.delete("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const index = usuarios.findIndex((i) => i.id === id)

  if(index === -1){
    return res.status(404).json({erro: "Item não encontrado"})
  }

  usarios.splice(index, 1)
  res.status(204).send()
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
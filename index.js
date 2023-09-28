import express from 'express'
import bodyParser from 'body-parser'
import CNPJAPI from './cnpj.api.js'
import e from 'express'

const app = express()
const port = 3000
const jsonParser = bodyParser.json()

app.get('/ultima', (req, res) => {
  res.send('ULTIMA GET')
})

app.post('/CNPJ/Valida', jsonParser , (req, res) => {
    CNPJAPI.valida(req.body)
           .then(()=> {
            res.status(200).send()
           })
           .catch( error => {
            res.status(error.code).send(error)
           }
           )

  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
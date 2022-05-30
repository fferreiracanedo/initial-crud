import express from 'express'
import { createUserController } from './controllers/createUserController.js'
import { listUserController } from './controllers/listUserController.js'

const app = express()
const port = 3000
app.use(express.json())

app.post('/users', createUserController)
app.get('/users', listUserController)
app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(port, () => {
  console.log(`App is running at port ${port}`)
})

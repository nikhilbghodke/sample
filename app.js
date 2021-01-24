const express = require('express')
const app = express()
const port = process.env.PORT||3000 

app.get('/', (req, res) => {
  console.log(process.env)
  res.send(process.env)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log(process.env)
})

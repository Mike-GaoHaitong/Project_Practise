const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.status(200).json({success:"true", message: "success"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
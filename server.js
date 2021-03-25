const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.status(200).json("我爱你屁屁宝宝")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
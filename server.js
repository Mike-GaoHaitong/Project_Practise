const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const customer = require('./routes/customer');

app.get('/', (req, res) => {
  res.status(200).json({success: "true", message:"Hello world"})
})

app.use('/customer', customer);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
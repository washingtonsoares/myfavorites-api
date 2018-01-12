const express = require('express')
const app = express()
const getOpenGraphData = require('./utils')
const PORT = process.env.PORT || 3000

app.get('/', (req, res)  => {
  const url = req.query.url

  getOpenGraphData(url, response => {
    console.log(`LOG: ${url}` )
    res.send(response)
  })
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

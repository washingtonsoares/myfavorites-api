const express = require('express')
const app = express()
const getOpenGraphData = require('./utils')

app.get('/', (req, res)  => {
  const url = 'https://github.com/washingtonsoares/myfavorites-ui'

  getOpenGraphData(url, response => res.send(response))
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

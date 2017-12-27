const ogs = require('open-graph-scraper')

module.exports = getOpenGraphData = (url, callback) => {
  ogs( { url },
  	(error, response) => {
      if(error) {
        callback('error!')
      } else  {
        callback(response.data)
      }
    }
  )
}

const axios = require('axios')
const settings = require('./credential-settings')

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const data = JSON.parse(event.body)
    const requestUrl = settings.wrapUrl('ujians/save-result')
    axios.defaults.headers.common.Id = process.env.APP_ID
    axios.defaults.headers.common.Secret = process.env.APP_SECRET
    axios.defaults.headers.common.Authorization = 'Bearer ' + data.profileToken
    const response = await axios.post(requestUrl, {
      ujianId: data.ujianId,
      answers: data.answers
    })
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (error) {
    // ini dirancang untuk error axiosnya, bukan untuk logic javascriptnya
    // eg: circular json berarti dari javascript
    let statusCode = 500
    let body = 'An error has occured (500)'
    if (error.response && error.response.status) {
      statusCode = error.response.status
      body = error.response.data.message
    }
    return {
      statusCode,
      body
    }
  }
}

module.exports = { handler }

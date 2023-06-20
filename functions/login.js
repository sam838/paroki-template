const axios = require('axios')
const settings = require('./credential-settings')

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const data = JSON.parse(event.body)
    const requestUrl = settings.wrapUrl('users/login')
    axios.defaults.headers.common.Id = process.env.APP_ID
    axios.defaults.headers.common.Secret = process.env.APP_SECRET
    const response = await axios.post(requestUrl, {
      username: data.username,
      password: data.password
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

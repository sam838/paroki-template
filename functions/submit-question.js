const axios = require('axios')
const settings = require('./credential-settings')

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const data = JSON.parse(event.body)
    const requestUrl = settings.wrapUrl('question-portals/ask-question')
    axios.defaults.headers.common.Id = process.env.APP_ID
    axios.defaults.headers.common.Secret = process.env.APP_SECRET
    const submitData = {
      fullName: data.fullName,
      email: data.email,
      keuskupanId: data.keuskupanId,
      parokiId: data.parokiId,
      keuskupanName: data.keuskupanName,
      parokiName: data.parokiName,
      phoneNumber: data.phoneNumber,
      question: data.question,
      token: data.token
    }
    const response = await axios.post(requestUrl, submitData)
    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (error) {
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

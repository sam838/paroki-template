const axios = require('axios')
const settings = require('./credential-settings')

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const data = JSON.parse(event.body)
    const requestUrl = settings.wrapUrl('question-portals/question-progress')
    axios.defaults.headers.common.Id = process.env.APP_ID
    axios.defaults.headers.common.Secret = process.env.APP_SECRET
    axios.defaults.headers.common.Authorization = 'Bearer ' + data.profileToken
    if (data.action === 1) {
      const submitData = {
        action: 1,
        _id: data._id,
        status: data.status
      }
      const response = await axios.put(requestUrl, submitData)
      return {
        statusCode: 200,
        body: JSON.stringify(response.data)
      }
    } else if (data.action === 2) {
      const submitData = {
        action: data.action,
        bookedBy: data.bookerId,
        bookerName: data.bookerName,
        _id: data._id
      }
      const response = await axios.put(requestUrl, submitData)
      return {
        statusCode: 200,
        body: JSON.stringify(response.data)
      }
    } else if (data.action === 3) {
      const submitData = {
        action: data.action,
        answer: data.answer,
        bookedBy: data.bookerId,
        reviewStatus: data.reviewStatus,
        _id: data._id
      }
      const response = await axios.put(requestUrl, submitData)
      return {
        statusCode: 200,
        body: JSON.stringify(response.data)
      }
    } else if (data.action === 4) {
      const submitData = {
        action: data.action,
        answer: data.answer,
        reviewStatus: data.reviewStatus,
        _id: data._id,
        content: data.content,
        creatorId: data.creatorId,
        creatorName: data.creatorName
      }
      const response = await axios.put(requestUrl, submitData)
      return {
        statusCode: 200,
        body: JSON.stringify(response.data)
      }
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

const express = require('express')
const PersonController = require('./controllers/PersonController')

const router = express.Router()

router.get('/', (request, response) => {
    console.log('testeeeeee')
    return response.send({'message': 'hello'})
})

router.get('/people', new PersonController().index)

module.exports = router
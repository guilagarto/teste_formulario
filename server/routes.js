const express = require('express')
const PersonController = require('./controllers/PersonController')

const router = express.Router()

router.get('/', (request, response) => {
    console.log('testeeeeee')
    return response.send({'message': 'hello'})
})

const personController = new PersonController()
router.get('/people', personController.index)
router.post('/people', personController.create)

module.exports = router
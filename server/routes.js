const express = require('express')
const PersonController = require('./controllers/PersonController')

const router = express.Router()

router.get('/', (request, response) => {
    return response.send({'message': 'hello'})
})

const personController = new PersonController()
router.get('/people', personController.index)
router.get('/people/:id', personController.find)
router.post('/people', personController.create)
router.delete('/people/:id', personController.destroy)
router.put('/people/:id', personController.update)

module.exports = router
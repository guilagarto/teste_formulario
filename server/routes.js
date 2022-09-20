const express = require('express')

const router = express.Router()

router.get('/', (request, response) => {
    return response.send({'message': 'hello'})
})

module.exports = router
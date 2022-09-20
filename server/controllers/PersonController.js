const Person = require('../models/Person')

class PersonController {
    async index(request, response) {
        const persons = await Person.findAll()
        return response.json(persons)
    }
}

module.exports = PersonController
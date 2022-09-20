const Person = require('../models/Person')

class PersonController {
    async index(request, response){
        const people = await Person.findAll()
        return response.json(people)
    }

    async create(request, response){
        const { firstName, lastName, email, phone, gender, about, address, image } = request.body;
        const person = await Person.create(
            { firstName, lastName, email, phone, gender, about, address, image }
        )
        return response.json(person)
    }
}

module.exports = PersonController
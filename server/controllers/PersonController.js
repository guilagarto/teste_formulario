const Person = require('../models/Person')

class PersonController {
    async index(request, response){
        const people = await Person.findAll()
        return response.json(people)
    }

    async find(request, response){
        const { id } = request.params
        const person = await Person.findOne({ where: { id } })
        return response.json(person)
    }

    async create(request, response){
        const { firstName, lastName, email, phone, gender, about, address, image } = request.body;
        const person = await Person.create(
            { firstName, lastName, email, phone, gender, about, address, image }
        )
        return response.json(person)
    }

    async destroy(request, response){
        const { id } = request.params
        const person = await Person.destroy({ where: { id } })
        return response.status(204).json()
    }
}

module.exports = PersonController
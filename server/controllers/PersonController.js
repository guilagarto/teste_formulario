const Person = require('../models/Person')

class PersonController {
    async index(request, response){
        const people = await Person.findAll()
        return response.json(people)
    }

    async find(request, response){
        const { id } = request.params
        const person = await Person.findOne({ where: { id } })
        if (! person) return response.status(404).json({ message: 'Person not found.' })
        return response.json(person)
    }

    async create(request, response){
        const { firstName, lastName, email, phone, gender, about, address, image } = request.body;
        try {
            const person = await Person.create(
                { firstName, lastName, email, phone, gender, about, address, image }
            )
            return response.json(person)
        } catch (error){
            return response.status(400).json({
                message: 'Unable to complete registration.',
                error
            })
        }
    }

    async destroy(request, response){
        const { id } = request.params
        const result = await Person.destroy({ where: { id } })

        if (result === 0) return response.status(404).json({ message: 'Person not found.' })
        return response.status(204).send()
    }

    async update(request, response){
        const { firstName, lastName, email, phone, gender, about, address, image } = request.body;
        const { id } = request.params

        const [ result ] = await Person.update(
            { firstName, lastName, email, phone, gender, about, address, image },
            { where: { id } }
        )

        if (result === 0) return response.status(404).json({ message: 'Person not found.' })
        return response.status(204).send()
    }
}

module.exports = PersonController
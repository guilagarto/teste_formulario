import React, { useEffect, useState } from "react";
import { Table, Button } from 'react-bootstrap'

function TableComponent(){    
    const [ people, setPeople ] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3001/people')
        .then(data => data.json())
        .then(person => {
            console.log(person)
            setPeople(person);
        })
        .catch(() => {
            alert('Erro', 'Não foi possível carregar os dados.');
        });
    }, [])
      
    return <Table>
        <thead className="table-active">
            <tr>
                <th>N°</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>Gênero</th>
                <th>Biografia</th>
                <th>Endereço</th>
                <th>Url Imagem</th>
                <th>Excluir</th>
            </tr>
        </thead>
        <tbody> 
            { people.map((person, idx) => 
                <tr key={person.id}>
                    <td>{idx + 1}</td>
                    <td>{person.firstName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.email}</td>
                    <td>{person.phone}</td>
                    <td>{person.gender}</td>
                    <td>{person.about}</td>
                    <td>{person.address}</td>
                    <td>{person.image}</td>
                    <td><Button variant="outline-danger" onClick={deletePerson(person.id)}>Excluir</Button></td>
                </tr>
            )}
        </tbody>
    </Table>
}

const deletePerson = id => () => {
    fetch(`http://localhost:3001/people/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    })
    window.location.reload();
}

export default TableComponent
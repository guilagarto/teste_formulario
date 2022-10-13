import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import InputComponent from '../input';
import Submit from '../submit';

function EditPerson() {
  const path = useLocation().pathname.split('/')
  const personId = path[path.length - 1]

  const [ person, setPerson ] = useState([])

  useEffect(()=>{
      fetch(`http://localhost:3001/people/${personId}`)
      .then(data => data.json())
      .then(person => { setPerson(person) })
      .catch(() => {
          alert('Erro', 'Não foi possível carregar os dados.');
      });
  }, [])

  return (<>
    <h1>Editar Cadastro de Pessoa</h1>
    <Form>
      <InputComponent value={person.firstName} id="firstName" title="Nome"/>
      <InputComponent value={person.lastName} id="lastName" title="Sobrenome"/>
      <InputComponent value={person.email} id="email" title="E-mail" type="email"/>
      <InputComponent value={person.phone} id="phone" title="Telefone"/>
      <InputComponent value={person.gender} id="gender" title="Gênero"/>
      <InputComponent value={person.about} id="about" title="Biografia"/>
      <InputComponent value={person.address} id="address" title="Endereço"/>
      <InputComponent value={person.image} id="image" title="Url Imagem" type="file"/>
      <Submit action={`http://localhost:3001/people/${personId}`} method="PUT" title="Enviar"/>
    </Form>
  </>);
}

export default EditPerson;
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import InputText from '../inputText';
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
      <InputText value={person.firstName} id="firstName" title="Nome"/>
      <InputText value={person.lastName} id="lastName" title="Sobrenome"/>
      <InputText value={person.email} id="email" title="E-mail" type="email"/>
      <InputText value={person.phone} id="phone" title="Telefone"/>
      <InputText value={person.gender} id="gender" title="Gênero"/>
      <InputText value={person.about} id="about" title="Biografia"/>
      <InputText value={person.address} id="address" title="Endereço"/>
      <InputText value={person.image} id="image" title="Url Imagem"/>
      <Submit action={`http://localhost:3001/people/${personId}`} method="PUT" title="Enviar"/>
    </Form>
  </>);
}

export default EditPerson;
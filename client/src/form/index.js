import Form from 'react-bootstrap/Form'
import InputComponent from './input';
import Submit from './submit';

function FormComponent() {
  return (<>
    <h1>Cadastro de Pessoa</h1>
    <Form>
      <InputComponent id="firstName" title="* Nome" required/>
      <InputComponent id="lastName" title="* Sobrenome"/>
      <InputComponent id="email" title="* E-mail" type="email"/>
      <InputComponent id="phone" title="* Telefone"/>
      <InputComponent id="gender" title="* Gênero"/>
      <InputComponent id="about" title="Biografia"/>
      <InputComponent id="address" title="Endereço"/>
      <InputComponent id="image" title="Imagem" type="file"/>
      <Submit action="http://localhost:3001/people" method="POST" title="Enviar"/>
    </Form>
  </>);
}

export default FormComponent;
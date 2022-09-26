import Form from 'react-bootstrap/Form'
import InputText from './inputText';
import Submit from './submit';

function FormComponent() {
  return (<>
    <h1>Cadastro de Pessoa</h1>
    <Form>
      <InputText id="firstName" title="Nome"/>
      <InputText id="lastName" title="Sobrenome"/>
      <InputText id="email" title="E-mail" type="email"/>
      <InputText id="phone" title="Telefone"/>
      <InputText id="gender" title="Gênero"/>
      <InputText id="about" title="Biografia"/>
      <InputText id="address" title="Endereço"/>
      <InputText id="image" title="Url Imagem"/>
      <Submit action="http://localhost:3001/people" method="POST" title="Enviar"/>
    </Form>
  </>);
}

export default FormComponent;
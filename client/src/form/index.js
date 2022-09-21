import './index.css';
import InputText from './inputText';
import Submit from './submit';

function Form() {
  return (
    <form className="form">
      <InputText title="Nome"/>
      <InputText title="Sobrenome"/>
      <InputText title="E-mail"/>
      <InputText title="Telefone"/>
      <InputText title="Gênero"/>
      <InputText title="Biografia"/>
      <InputText title="Endereço"/>
      <InputText title="Url Imagem"/>
      <Submit title="Enviar"/>
    </form>
  );
}

export default Form;
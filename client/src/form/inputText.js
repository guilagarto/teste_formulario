import Form from 'react-bootstrap/Form'

function InputText(props){
    return (
        <Form.Group className='mb-3'>
            <Form.Label>{ props.title + ':' }</Form.Label>
            <Form.Control id={props.id} type={ props.type || 'text' } />
        </Form.Group>
    );
}

export default InputText
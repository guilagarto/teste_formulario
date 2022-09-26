import { useState } from 'react';
import Form from 'react-bootstrap/Form'

function InputComponent(props){
    const [value, setValue ] = useState()
    function handleChange(event){
        setValue(event.target.value)
    }

    return (
        <Form.Group className='mb-3'>
            <Form.Label>{ props.title + ':' }</Form.Label>
            <Form.Control 
                onChange={handleChange} 
                value={value || props.value} 
                id={props.id} 
                type={ props.type || 'text' } 
            />
        </Form.Group>
    );
}

export default InputComponent
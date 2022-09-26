import { Button } from 'react-bootstrap'

function Submit(props){
    function registerPerson(){
        const requestBody = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            gender: document.getElementById('gender').value,
            about: document.getElementById('about').value,
            address: document.getElementById('address').value,
            image: document.getElementById('image').value
        }
        if (
            !requestBody.firstName || 
            !requestBody.lastName || 
            !requestBody.email || 
            !requestBody.phone || 
            !requestBody.gender 
        ) alert('Preencha os campos obrigatórios (*).')
        else {
            sendData({ 
                url: props.action,
                method: props.method,
                data: requestBody
            })
            window.location.href = "/";
        }
    }

    return <Button onClick={registerPerson}>{ props.title }</Button>
}

async function sendData({ url, method, data }){
    const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json()
}

export default Submit
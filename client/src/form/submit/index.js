import { Button } from 'react-bootstrap'

function Submit(props){
    return <Button onClick={registerPerson}>{ props.title }</Button>
}

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
    sendData(requestBody)
        .then(response => console.log(response))
    window.location.href = "/";
}

async function sendData(data = {}){
    const response = await fetch('http://localhost:3001/people', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json()
}

export default Submit
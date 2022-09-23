import { Link } from 'react-router-dom'
import Table from "./table"

function Home(){
    return <div>
        <h1>Listagem de Pessoa Física</h1>
        <Table />
        <Link to='/cadastro' className='btn btn-primary'>Cadastrar Pessoa</Link>
    </div>
}

export default Home
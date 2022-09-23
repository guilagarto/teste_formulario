import { Link } from 'react-router-dom'
import Table from "./table"

function Home(){
    return <div>
        <h1>Listagem de Pessoa Física</h1>
        <Link to='/cadastro'>Cadastrar Pessoa</Link>
        <Table />
    </div>
}

export default Home
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './home';
import FormComponent from './form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
            <Route element = { <Home /> }  path="/" exact />
            <Route element = { <FormComponent /> }  path="/cadastro" />
        </Routes>
      </BrowserRouter>
    </div>
  )  
}

export default App
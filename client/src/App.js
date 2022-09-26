import { Route, Routes, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import FormComponent from './form';
import EditPerson from "./form/edit";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
            <Route element = { <Home /> }  path="/" exact />
            <Route element = { <FormComponent /> }  path="/cadastro" />
            <Route element = { <EditPerson /> }  path="/cadastro/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  )  
}

export default App
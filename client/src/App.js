import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './home';
import Form from './form';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route element = { <Home /> }  path="/" exact />
            <Route element = { <Form /> }  path="/cadastro" />
        </Routes>
      </BrowserRouter>
    </div>
  )  
}

export default App
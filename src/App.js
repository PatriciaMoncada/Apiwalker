import './App.css';
import { Route, Routes } from "react-router-dom";
import Form from './Components/Form';
import People from './Components/People';
import Planets from "./Components/Planets";

function App() {
  return (
    <div className="App">
      <Form></Form>
      <Routes>
        <Route path="/people/:id" element={<People></People>}></Route>
        <Route path="/planets/:id" element={<Planets></Planets>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoUsuario from "./components/ListadoUsuario";

function App() {

const [usuarios, setUsuarios] = useState([]);
const [usuario, setUsuario] = useState({});

  return (
    <div className="container mx-auto  mt-20 ">
      <Header 
       
      />

      <div className="mt-12 md:flex ">
        <Formulario   
        usuarios = {usuarios}
        setUsuarios = {setUsuarios}
        usuario = {usuario}
        
        
        />
        <ListadoUsuario
         usuarios= {usuarios}
         setUsuario = {setUsuario}
        
        />
      </div>
    </div>
  );
}

export default App;

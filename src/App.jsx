import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoUsuario from "./components/ListadoUsuario";

function App() {
 
  const [usuarios, setUsuarios] = useState(JSON.parse(localStorage.getItem('usuarios')) ??[]);
  const [usuario, setUsuario] = useState({});



  const eliminarUsuario = id => {
    const usuariosAtualizados = usuarios.filter((usuario) => usuario.id !== id);
  setUsuarios(usuariosAtualizados)};



useEffect (()=> {
localStorage.setItem('usuarios',JSON.stringify(usuarios));

},[usuarios])

  return (
    <div className="container mx-auto  mt-20 ">
      <Header />

      <div className="mt-12 md:flex ">
        <Formulario
          usuarios={usuarios}
          setUsuarios={setUsuarios}
          usuario={usuario}
          setUsuario={setUsuario}
        />
        <ListadoUsuario
          usuarios={usuarios}
          setUsuario={setUsuario}
          eliminarUsuario={eliminarUsuario}
        />
      </div>
    </div>
  );
}

export default App;

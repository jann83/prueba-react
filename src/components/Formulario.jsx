import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ usuarios, setUsuarios, usuario, setUsuario }) => {
  const [nombre, setNombre] = useState("");
  const [paterno, setPaterno] = useState("");
  const [materno, setMaterno] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [opinion, setOpinion] = useState("");

  const [error, setError] = useState(false)

  useEffect(() => {
if(Object.keys(usuario).length > 0 )
{
setNombre(usuario.nombre)
setPaterno(usuario.paterno)
setMaterno(usuario.materno)
setEmail(usuario.email)
setFecha(usuario.fecha)
setOpinion(usuario.opinion)

}
  },[usuario])


  
  const generarId = () => {

const random = Math.random().toString(36).substr(2);
const fecha = Date.now().toString(36)
return random + fecha

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, paterno, materno, email, fecha, opinion].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    const objetoUsuario = {
      nombre,
      paterno,
      materno,
      email,
      fecha,
      opinion
     
    }

if(usuario.id ){

//console.log('editando')
objetoUsuario.id = usuario.id

const usuariosActualizados = usuarios.map (usuarioState => usuarioState.id === usuario.id 
  ? objetoUsuario : usuarioState  )
setUsuarios(usuariosActualizados)
setUsuario({})
}
else 
{
  objetoUsuario.id= generarId();
setUsuarios ([...usuarios, objetoUsuario]); 
}
 
    //reinicio formulario
    setNombre("");
    setPaterno("");
    setMaterno("");
    setEmail("");
    setFecha("");
    setOpinion("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5  ">
      <h2 className="text-20 font-black  text-3xl text-center">
        {" "}
        Alta Usuario
      </h2>
      <p className="text-xl mt-5 text-center mb-10">
        {" "}
        Añade Usuario y {""}
        <span className="text-red-600 font-bold ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5 font-bold"
      >
        {error && <Error><p>Todos los campos son obligatorios</p></Error> }
        <div className="mb-5">
          <label htmlFor="usuario" className="block text-gray-700 uppercase ">
            Nombre Usuario
          </label>
          <input
            id="usuario"
            type="text"
            placeholder="Nombre de Usuario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={nombre}
            //callback
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="apellidoPaterno"
            className="block text-gray-700 uppercase "
          >
            Apellido Paterno
          </label>
          <input
            id="apellidoPaterno"
            type="text"
            placeholder="Apellido Paterno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={paterno}
            //callback
            onChange={(e) => setPaterno(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="apellidoMaterno"
            className="block text-gray-700 uppercase "
          >
            Apellido Materno
          </label>
          <input
            id="apellidoMaterno"
            type="text"
            placeholder="Apellido Materno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={materno}
            //callback
            onChange={(e) => setMaterno(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase ">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 rounded-md"
            value={email}
            //callback
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fechaNacimieto"
            className="block text-gray-700 uppercase "
          >
            Fecha Nacimiento
          </label>
          <input
            id="fechaNacimieto"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-300 textarea cursor-pointer"
            value={fecha}
            //callback
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Opinión"
            className="placeholder-gray-400  p-3 rounded-md w-full mt-2 border-2"
            value={opinion}
            //callback
            onChange={(e) => setOpinion(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value={usuario.id ? 'Editar Usuario' : 'Agregar Usuario' }
          className=" transition-all cursor-pointer bg-red-600 w-full text-white p-3 uppercase rounded-lg hover:bg-red-700 mt-10"
        />
      </form>
    </div>
  );
};

export default Formulario;

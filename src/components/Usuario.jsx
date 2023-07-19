import Formulario from "./Formulario"





export const Usuario = ({usuario, setUsuario, eliminarUsuario}) => {


  const {nombre, paterno, materno, email, fecha, opinion, id} = usuario
  
const handleEliminar = () =>{
const respuesta = confirm('Deseas eliminar este Usario, los datos se perdaran y no podras recuperarlos');
 if (respuesta ){
eliminarUsuario(id)

 }
}

  return (
    <div className="mx-5 my-5  bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Nombre:{""} {""}
      <span className="font-normal normal-case">{nombre}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Apellido Paterno:{""} {""}
      <span className="font-normal normal-case">{paterno}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Apellido Materno:{""} {""}
      <span className="font-normal normal-case">{materno}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Email:{""} {""}
      <span className="font-normal normal-case">{email}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      Fecha nacimiento:{""} {""}
      <span className="font-normal normal-case">{fecha}</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">
      opinión:{""} {""}
      <span className="font-normal normal-case">
       {opinion}
      </span>
    </p>
    <div className=" flex justify-between  mt-10">
    
    <button
     type="button"
     className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg " 
     onClick={()=>setUsuario (usuario)}
     >Editar</button> 
     <button
     type="button" 

     className="py-2 px-10 bg-blue-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg " 
     onClick={handleEliminar}
     >Eliminar</button>  
      
    </div>
  </div>
  )
}

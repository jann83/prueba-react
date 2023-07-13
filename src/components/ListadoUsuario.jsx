
import {Usuario} from "./Usuario";



const ListadoUsuario = ({ usuarios,setUsuario }) => {


 


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll ">
      {usuarios && usuarios.length ? (
        <>
          <h2 className="text-20 font-black  text-3xl text-center  ">
            Listado Usuarios
          </h2>

          <p className="text-xl mt-5 text-center mb-10 ">
            {" "}
            Administración de
            <span className="text-red-600 font-bold "> Usuarios</span>
          </p>

          {usuarios.map((usuario) => (
            <Usuario 
            key={usuario.id} 
            usuario={usuario} 
            setUsuario = {setUsuario}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-20 font-black  text-3xl text-center  ">
            No hay Usuarios
          </h2>
          <p className="text-xl mt-5 text-center  mb-10 ">
            {" "}
            Comienza agregando
            <span className="text-red-600 font-bold "> Usuarios</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoUsuario;

import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {



  return (
    <div className="md:w-1/2 lg:w-3/5  md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
          Patient List</h2>
          <p className="text-xl mt-5 mb-10 text-center" >
            Manage your {""}
              <span className="text-indigo-600 font-bold " >Patients and Appointments</span>
          </p>

          {/* Con este código se itera los pacientes */}
          { pacientes.map( (paciente) =>(
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              ))}
        </>
      ): (
          <>
          <h2 className="font-black text-3xl text-center">
              There are no patients</h2>
          <p className="text-xl mt-5 mb-10 text-center" >
              Start Adding Patients {""}
              <span className="text-indigo-600 font-bold " >And They Will Appear In This Place</span>
          </p>
          
          </>
      )}

    </div>
  )
}

export default ListadoPacientes
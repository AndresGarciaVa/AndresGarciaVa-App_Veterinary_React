

const paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombre,propietario,email,fecha,sintomas,id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Do you want to remove this patient?')

        if(respuesta){
            eliminarPaciente(id)
        }
    }
    
    return (
    <div className="mx-5 my-8 bg-white shadow-md px-5 py-10 rounded-xl ">
            <p className="font-bold mb-3 text-gray-700 uppercase ">Name: {""}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase ">Owner: {""}
                <span className="font-normal normal-case">{propietario}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase ">Email: {""}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase ">Date: {""}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase ">SYMPTOMS: {""}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="flex justify-between">
                <button 
                type="button"
                className="py-2 px-10 bg-indigo-500 hover:bg-indigo-600 text-white font-bold uppercase rounded-lg"
                onClick={() => setPaciente(paciente)}
                >Edit</button>

            <button 
                type="button"
                className="py-2 px-10 bg-red-500 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
                onClick={handleEliminar}
                >Delete</button>
            </div>
        </div>
    )
}

export default paciente

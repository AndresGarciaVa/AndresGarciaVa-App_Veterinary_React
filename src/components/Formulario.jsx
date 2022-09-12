import {useState, useEffect} from "react";
import Error from "./Error";


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre]= useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas]= useState("");

    const [error, setError] = useState(false);


    //Aqui se llena lo de editar
    useEffect(() => {
        if( Object.keys(paciente).length > 0 ){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    },[paciente])

    

    //Aquí se genera el ID único para cada ususario
    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        //Validacion del formulario
        if([nombre,propietario,email,fecha,sintomas].includes("")){
            console.log("Hay al menos un campo vacio");

            setError(true)
            return
        } 

        setError(false)

        //Objeto de paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }

        if(paciente.id){
            //Editando el registro o actualizando el registro del paciente
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})

        }else{
            //Nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }

        //Reiniciar el formulario
        setNombre("")
        setPropietario("")
        setEmail("")
        setFecha("")
        setSintomas("")

    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className=" font-black text-3xl text-center">Patient Data</h2>

            <p className="text-lg mt-5 text-center mb-10">
                    Add and {""}
                <span className="text-indigo-700 font-bold">Manage Patients</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 ">
                

                {error && <Error><p> All fields are required</p></Error>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Pet Name</label>

                    <input
                        id="mascota"
                        type="text"
                        placeholder="Pet Name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl "
                        //Con las siguientes 2 lineas de código se llena el state de los componentes
                        value = {nombre}
                        onChange={(e)=> setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Owner Name</label>

                    <input
                        id="propietario"
                        type="text"
                        placeholder="Owner Name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl "
                        value = {propietario}
                        onChange={(e)=> setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Owner"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl "
                        value = {email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Date</label>

                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl "
                        value = {fecha}
                        onChange={(e)=> setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Symptoms</label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-xl"
                        placeholder="Describe the Symptoms"
                        value = {sintomas}
                        onChange={(e)=> setSintomas(e.target.value)}
                    />
                </div>

                <input 
                    type="submit" 
                    className="rounded-lg bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={paciente.id ? "Save Changes" : "Add Patient"}
                />

            </form>
        </div>
    )
}

export default Formulario;
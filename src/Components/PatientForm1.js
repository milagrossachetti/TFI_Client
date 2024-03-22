import './Components.css';

function PatientForm1() {
    return (
        <div className='container grid grid-cols-1 gap-2'>
            <div>
                <h1 className="font-abel text-lg text-main-color">Añadir información del paciente</h1>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color'>Nombre*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="text" aria-label="Nombre"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color'>DNI*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none remove-arrow" type="number" aria-label="DNI"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color flex-shrink-0'>Fecha de Nacimiento*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="date" aria-label="Fecha de Nacimiento"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color'>Celular*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="text" aria-label="Celular"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color'>Sexo*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="text" aria-label="Sexo"></input>
                    <label className='font-montserrat text-base text-main-color'>Edad</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none remove-arrow" type="number" aria-label="Edad"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color'>Dirección*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="text" aria-label="Dirección"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color'>Localidad*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="text" aria-label="Localidad"></input>
            </div>
        </div>
    )
}

export default PatientForm1;
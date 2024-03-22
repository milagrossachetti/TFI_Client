import './Components.css';

function PatientForm1() {
    return (
        <div className='container grid grid-cols-1 gap-2'>
            <div>
                <div className="font-abel text-lg text-main-color">Añadir información del paciente</div>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color'>Nombre*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="text" name='name' aria-label="Nombre"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color'>DNI*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none remove-arrow" type="number" name='id' aria-label="DNI"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color flex-shrink-0'>Fecha de Nacimiento*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="date" name='birthdate' aria-label="Fecha de Nacimiento"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color'>Celular*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="text" name='phone' aria-label="Celular"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color flex-shrink-0'>Correo Electrónico*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="text" name='email' aria-label="Correo Electrónico"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color'>Sexo*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="text" name='sex' aria-label="Sexo"></input>
                    <label className='font-montserrat text-base text-main-color'>Edad</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none remove-arrow" name='age' type="number" aria-label="Edad"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color'>Dirección*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="text" name='address' aria-label="Dirección"></input>
            </div>
            <div className='flex flex-row gap-4'>
                    <label className='font-montserrat text-base text-main-color'>Localidad*</label>
                    <input className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none" type="text" name='location' aria-label="Localidad"></input>
            </div>
        </div>
    )
}

export default PatientForm1;
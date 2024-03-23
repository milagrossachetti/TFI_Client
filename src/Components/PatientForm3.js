import './Components.css';

function PatientForm3() {
    return (
        <div className='grid grid-cols-1 gap-2'>
            <div className='flex flex-row gap-4'>
                <span className='font-montserrat text-sm text-main-color flex-shrink-0'>MÉDICO DE CABECERA:</span>
                <input className="appearance-none bg-transparent border-b w-full font-montserrat text-sm text-main-color focus:outline-none" type="text" name='medic' aria-label="Médico de cabecera"></input>
                <span className='font-montserrat text-sm text-main-color flex-shrink-0'>TEL:</span>
                <input className="appearance-none bg-transparent border-b w-full font-montserrat text-sm text-main-color focus:outline-none" type="text" name='medicPhoneNumber' aria-label="Teléfono"></input>
            </div>
            <div className='flex flex-row'>
                <span className='font-montserrat text-sm text-main-color flex-shrink-0'>¿Debió ser hospitalizado en los 2 últimos años? ¿Por qué?</span>
            </div>
            <div className='flex flex-row'>
                <input className="appearance-none bg-transparent border-b w-full font-montserrat text-sm text-main-color focus:outline-none" type="text" name='question1' aria-label="Pregunta-1"></input>
            </div>
            <div className='flex flex-row'>
                <span className='font-montserrat text-sm text-main-color flex-shrink-0'>¿Tuvo alguna vez alergia a alguna medicina? ¿Cuál?</span>
            </div>
            <div className='flex flex-row'>
                <input className="appearance-none bg-transparent border-b w-full font-montserrat text-sm text-main-color focus:outline-none" type="text" name='question2' aria-label="Pregunta-2"></input>
            </div>
            <div className='flex flex-row'>
                <span className='font-montserrat text-sm text-main-color'>Cuando se lastima o extrae algún diente, ¿le sangra excesivamente y necesita atención para detener el sangrado?</span>
            </div>
            <div className='flex flex-row'>
                <input className="appearance-none bg-transparent border-b w-full font-montserrat text-sm text-main-color focus:outline-none" type="text" name='question3' aria-label="Pregunta-3"></input>
            </div>
            <div className='flex flex-row'>
                <span className='font-montserrat text-sm text-main-color'>¿Toma algún medicamento? ¿Cuál/es?</span>
            </div>
            <div className='flex flex-row'>
                <input className="appearance-none bg-transparent border-b w-full font-montserrat text-sm text-main-color focus:outline-none" type="text" name='question4' aria-label="Pregunta-4"></input>
            </div>
            <div className='flex flex-row gap-2'>
                <span className='font-montserrat text-sm text-main-color flex-shrink-0'>¿Fuma? ¿Cuánto?</span>
                <input className="appearance-none bg-transparent border-b w-full font-montserrat text-sm text-main-color focus:outline-none" type="text" name='question5' aria-label="Pregunta-5"></input>
                <span className='font-montserrat text-sm text-main-color flex-shrink-0'>¿Bebe? ¿Cuánto?</span>
                <input className="appearance-none bg-transparent border-b w-full font-montserrat text-sm text-main-color focus:outline-none" type="text" name='question6' aria-label="Pregunta-6"></input>
            </div>
            <div className='flex flex-row justify-center mt-1'>
                <span className='font-montserrat text-sm text-main-color'>AFECCIONES</span>
            </div>
            <div className='flex flex-row justify-center gap-4'>
                <div className='flex flex-col gap-2'>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Problemas cardíacos</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Presión sanguínea alta</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Presión sanguínea baja</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Enfermedades venéreas</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Fiebre reumática</span>
                </div>
                <div className='flex flex-col gap-2 mr-3'>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='hearProblems' aria-label='Problemas cardíacos'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='bloodPressureHigh' aria-label='Presión sanguínea alta'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='bloodPressureLow' aria-label='Presión sanguínea baja'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='venerealDiseases' aria-label='Enfermedades venéreas'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='rheumaticFever' aria-label='Fiebre reumática'></input>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Hepatitis</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Úlcera de estómago</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Dolor de cabeza</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>SIDA</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Epilepsia</span>
                </div>
                <div className='flex flex-col gap-2 mr-3'>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='hepatitis' aria-label='Hepatitis'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='stomachUlcer' aria-label='Úlcera de estómago'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='headache' aria-label='Dolor de cabeza'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='aids' aria-label='SIDA'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='epilepsy' aria-label='Epilepsia'></input>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Artritis</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Cáncer</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Diabetes</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Alteraciones nerviosas</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Sinusitis</span>
                </div>
                <div className='flex flex-col gap-2 mr-3'>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='arthritis' aria-label='Artritis'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='cancer' aria-label='Cáncer'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='diabetes' aria-label='Diabetes'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='nervousDisorders' aria-label='Alteraciones nerviosas'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='sinusitis' aria-label='Sinusitis'></input>
                </div>
            </div>
        </div>
    );
}

export default PatientForm3;
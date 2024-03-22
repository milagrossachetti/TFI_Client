import './Components.css';

function PatientForm2() {
    return (
        <div className='container grid grid-cols-1 gap-2 text-center'>
            <div>
                <span className="font-montserrat text-sm text-secondary-color">PRÓTESIS REMOVIBLES EXISTENTES</span>
            </div>
            <div className='flex flex-row justify-center gap-4'>
                <div className='flex flex-col gap-2'>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Superior Parcial:</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Inferior Parcial:</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='partialTop' aria-label='Superior Parcial'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='partialBottom' aria-label='Inferior Parcial'></input>
                </div>
                <div className='flex flex-col gap-2'>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Superior Total:</span>
                    <span className='font-montserrat text-sm text-main-color flex-shrink-0'>Inferior Total:</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='completeTop' aria-label='Superior Total'></input>
                    <input className='accent-secondary-color focus:ring-0 h-5 w-5' type='checkbox' name='completeBottom' aria-label='Inferior Total'></input>
                </div>
            </div>
        </div>
    );
}

export default PatientForm2;
import './Components.css';

import PrimaryCard from './PrimaryCard';
import SecondaryCard from './SecondaryCard';
import PatientForm1 from './PatientForm1';
import PatientForm2 from './PatientForm2';
import PatientForm3 from './PatientForm3';
import Button from './Button';
import RequiredFieldsLabel from './RequiredFieldsLabel';

function PatientRegistrationForm() {

    const submitForm = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const payload = {};

        // Itera sobre todos los elementos del formulario
        for (let [key, value] of formData.entries()) {
            // Verifica si el elemento es un checkbox
            if (e.target[key].type === 'checkbox') {
                // Asigna true si está marcado o false si no lo está
                payload[key] = e.target[key].checked;
            } else {
                // Asigna el valor del elemento al payload
                payload[key] = value;
            }
        }

        // Agregar manualmente los checkboxes al payload si no están marcados
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            if (!(checkbox.name in payload)) {
                payload[checkbox.name] = false;
            }
        });

        console.log(payload);
    }
    
    return (
            <form onSubmit={submitForm}>
                <PrimaryCard>
                    <div className='flex justify-center items-center h-full'>
                        <div className='w-1/2 px-8 py-2'>
                            <PatientForm1 />
                            <div className='flex flex-col justify-center items-center'>
                                <div className='mt-4 w-9/12'>
                                    <SecondaryCard>
                                    <PatientForm2 title="PRÓTESIS REMOVIBLES EXISTENTES" namePrefix="existingProstheses"/>
                                    </SecondaryCard>
                                </div>
                                <div className='mt-4 w-9/12'>
                                    <SecondaryCard>
                                    <PatientForm2 title="NECESIDAD DE PRÓTESIS REMOVIBLES" namePrefix="needProstheses"/>
                                    </SecondaryCard>
                                </div>
                            </div>
                        </div>
                        <div className='w-1/2'>
                            <SecondaryCard>
                            <PatientForm3 />
                            </SecondaryCard>
                        </div>
                    </div>
                    <div className='flex items-center justify-between px-4 m-1'>
                        <RequiredFieldsLabel>
                            Los campos que contienen (*) son campos que tienen que completarse sin excepción
                        </RequiredFieldsLabel>
                        <div className='mr-4'>
                            <Button>Aceptar</Button>
                        </div>
                    </div>
                </PrimaryCard>
            </form>
    );
}

export default PatientRegistrationForm;
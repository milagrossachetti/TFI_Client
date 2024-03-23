import './App.css';

import PrimaryCard from './Components/PrimaryCard';
import SecondaryCard from './Components/SecondaryCard';
import PatientForm1 from './Components/PatientForm1';
import PatientForm2 from './Components/PatientForm2';
import PatientForm3 from './Components/PatientForm3';
import Button from './Components/Button';
import RequiredFieldsLabel from './Components/RequiredFieldsLabel';

function App() {
  return (
    <>
      <div className='mt-5'></div>
      <RequiredFieldsLabel>
        Los campos que contienen (*) son campos que tienen que completarse sin excepción
      </RequiredFieldsLabel>
      <div className='mt-5'></div>
      <Button>
        Confirmar
      </Button>
      <Button>
        Aceptar
      </Button>
      <div className='mt-5'></div>
      <SecondaryCard>
        <PatientForm3 />
      </SecondaryCard>
      <div className='mt-5'></div>
      <PrimaryCard>
        <PatientForm1 />
      </PrimaryCard>
      <div className='mt-5'></div>
      <SecondaryCard>
        <PatientForm2 title = "PRÓTESIS REMOVIBLES EXISTENTES" namePrefix = "existingProstheses"/>
      </SecondaryCard>
      <div className='mt-5'></div>
      <SecondaryCard>
        <PatientForm2 title = "NECESIDAD DE PRÓTESIS REMOVIBLES" namePrefix = "needProstheses"/>
      </SecondaryCard>
    </>
  )
}

export default App;

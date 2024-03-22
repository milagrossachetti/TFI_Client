import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrimaryCard from './Components/PrimaryCard';
import SecondaryCard from './Components/SecondaryCard';
import PatientForm1 from './Components/PatientForm1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div className='mt-5'></div>
    <PrimaryCard>
      <App />
    </PrimaryCard>
    <div className='mt-5'></div>
    <SecondaryCard>
      <App />
    </SecondaryCard>
    <div className='mt-5'></div>
    <PrimaryCard>
      <PatientForm1 />
    </PrimaryCard>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

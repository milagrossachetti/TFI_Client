import { data } from 'autoprefixer';
import './Components.css';

import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import PrimaryCard from './PrimaryCard';
import SecondaryCard from './SecondaryCard';
import RequiredFieldsLabel from './RequiredFieldsLabel'

function PatientRegistrationForm() {
    //para obtener las preguntas a partir del get
    const[listQuestion, setListQuestions] = useState([]);
    const {register, handleSubmit, control} = useForm();
    const onSubmit = handleSubmit((data) => {
        const filteredAnswers = data.answers.filter(answer => answer !== null);
        const dataToSend = {
            id: data.id,
            name: data.name,
            mail: data.mail,
            sex: data.sex,
            age: data.age,
            birthday: data.birthday,
            address: data.address,
            location: data.location, 
            phone: data.phone,
            answers: filteredAnswers
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        };
        fetch('http://localhost:8080/patient', options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    });
    const{} = useFieldArray({
        control,
        name: 'answers'  //array de objetos (lista de respuestas)
    })
    //get
    useEffect(() => {
        fetch('http://localhost:8080/question')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setListQuestions(data);
        })
        .catch((err) => {
            console.log(err.message);
        })
    }, []);
    //const filteredAnswers = data.answers.filter(answer => answer !== null);
    const firstQuestions = listQuestion.filter(question => question.id <= 4);
    const remainingQuestions = listQuestion.filter(question => question.id > 4);
    const FirstQuestionsComponent = ({questions}) => (
        <>
            <h4 className="font-montserrat text-sm text-secondary-color text-center mx-auto mt-4">Prótesis</h4>
            {questions.map(question => (
                <div key={question.id} className='grid grid-cols-2 gap-2 text-center'>
                    <div className="flex items-center">
                        <label htmlFor={`question-${question.id}`} className='font-montserrat text-sm text-main-color'>{question.text}</label>
                    </div>
                    <div className="flex items-center justify-end">
                        {question.chosen ? (
                            <div className='flex flex-col gap-2'>
                                <input type='checkbox' id={`question.${question.id}`} {...register(`answers.${question.id}.text`)} className='accent-secondary-color focus:ring-0 h-5 w-5'></input>
                                <input type="hidden" id={`question.${question.id}`} value={question.id} {...register(`answers.${question.id}.question_id`)}/>
                            </div>
                        ) : (
                            <div>
                                <input type='text' id={`question.${question.id}`} {...register(`answers.${question.id}.text`)} className="appearance-none bg-transparent border-b w-full font-montserrat text-sm text-main-color focus:outline-none"></input>
                                <input type="hidden" id={`question.${question.id}`} value={question.id} {...register(`answers.${question.id}.question_id`)}/>
                            </div>
                        )}
                    </div>
                </div>  
            ))}
        </>
    );
    
    const RemainingQuestionsComponent = ({questions}) => (
        <>
            {questions.map(question => (
                <div key={question.id} className='grid grid-cols-2 gap-2 text-center'>
                    <div className="flex items-center">
                        <label htmlFor={`question-${question.id}`} className='font-montserrat text-sm text-main-color text-left'>{question.text}</label>
                    </div>
                    <div className="flex items-center justify-end">
                        {question.chosen ? (
                            <div className='flex flex-col gap-2'>
                                <input type='checkbox' id={`question.${question.id}`} {...register(`answers.${question.id}.text`)} className='accent-secondary-color focus:ring-0 h-5 w-5'></input>
                                <input type="hidden" id={`question.${question.id}`} value={question.id} {...register(`answers.${question.id}.question_id`)}/>
                            </div>
                        ) : (
                            <div>
                                <input type='text' id={`question.${question.id}`} {...register(`answers.${question.id}.text`)} className="appearance-none bg-transparent border-b w-full font-montserrat text-sm text-main-color focus:outline-none"></input>
                                <input type="hidden" id={`question.${question.id}`} value={question.id} {...register(`answers.${question.id}.question_id`)}/>
                            </div>
                        )}
                    </div>
                </div>  
            ))}
        </>
    );    
    return (
        <PrimaryCard>
            <form onSubmit={onSubmit}>
                <div className="grid grid-cols-2 grid-rows-2 gap-2">
                    <div className='grid grid-cols-1 gap-2'>
                        <h4 className="font-abel text-lg text-main-color">Añadir información del paciente</h4>
                        <div className='flex flex-row items-center gap-4'>
                            <label htmlFor='name' className='font-montserrat text-base text-main-color'>Nombre*</label>
                            <input type='text' id='name' name='name' {...register('name', {required: true})} className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none"></input>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <label htmlFor='id' className='font-montserrat text-base text-main-color'>DNI*</label>
                            <input type='text' id='id' {...register('id', {required: true})} className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none"></input>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <label htmlFor='birthday' className='font-montserrat text-base text-main-color'>Fecha de nacimiento*</label>
                            <input type='date' id='birthday' {...register('birthday', {required: true})} className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none"></input>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <label htmlFor='phone' className='font-montserrat text-base text-main-color'>Celular*</label>
                            <input type='tel' id='phone' {...register('phone', {required: true})} className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none"></input>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <label htmlFor='mail' className='font-montserrat text-base text-main-color'>Correo electrónico*</label>
                            <input type='email' id='mail' {...register('mail', {required: true})} className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none"></input>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <label htmlFor='sex' className='font-montserrat text-base text-main-color'>Sexo*</label>
                            <input type='text' id='sex' {...register('sex', {required: true})} className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none"></input>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <label htmlFor='age' className='font-montserrat text-base text-main-color'>Edad*</label>
                            <input type='text' id='age' {...register('age', {required: true})} className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none"></input>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <label htmlFor='address' className='font-montserrat text-base text-main-color'>Dirección*</label>
                            <input ttype='text' id='address' {...register('address', {required: true})} className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none"></input>
                        </div>
                        <div className='flex flex-row items-center gap-4'>
                            <label htmlFor='location' className='font-montserrat text-base text-main-color'>Localidad*</label>
                            <input type='text' id='location' {...register('location', {required: true})} className="appearance-none bg-transparent border-b w-full font-montserrat text-main-color focus:outline-none"></input>
                        </div>
                        <SecondaryCard>
                            <FirstQuestionsComponent questions={firstQuestions}/>
                        </SecondaryCard>
                    </div>
                    <SecondaryCard>
                        <RemainingQuestionsComponent questions={remainingQuestions}/>
                    </SecondaryCard>
                </div>
                <div className='flex items-center justify-between px-4 m-1'>
                        <RequiredFieldsLabel>
                            Los campos que contienen (*) son campos que tienen que completarse sin excepción
                        </RequiredFieldsLabel>
                        <div className='mr-4'>
                            <button type="submit">Aceptar</button>
                        </div>
                </div>
            </form>
        </PrimaryCard>
    );
}

export default PatientRegistrationForm;
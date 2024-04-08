import { data } from 'autoprefixer';
import './Components.css';

import React, { useEffect, useState } from "react";
import { useForm, useFieldArray, set } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';

function PatientRegistrationForm() {
    
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

    //para obtener las preguntas a partir del get
    const[listQuestion, setListQuestions] = useState([]);
    const{remove} = useFieldArray({
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
    
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='name'>Nombre*</label>
            <input type='text' id='name' name='name' {...register('name', {required: true})}></input>
            <label htmlFor='id'>DNI*</label>
            <input type='text' id='id' {...register('id', {required: true})}></input>
            <label htmlFor='birthday'>Fecha de nacimiento*</label>
            <input type='date' id='birthday' {...register('birthday', {required: true})}></input>
            <label htmlFor='phone'>Celular*</label>
            <input type='tel' id='phone' {...register('phone', {required: true})}></input>
            <label htmlFor='mail'>Correo electrónico*</label>
            <input type='email' id='mail' {...register('mail', {required: true})}></input>
            <label htmlFor='sex' >Sexo*</label>
            <input type='text' id='sex' {...register('sex', {required: true})}></input>
            <label htmlFor='age'>Edad*</label>
            <input type='text' id='age' {...register('age', {required: true})}></input>
            <label htmlFor='address'>Dirección*</label>
            <input ttype='text' id='address' {...register('address', {required: true})}></input>
            <label htmlFor='location'>Localidad*</label>
            <input type='text' id='location' {...register('location', {required: true})}></input>
            {listQuestion.map(question => (
                <div key={question.id}>
                    <label htmlFor={`question-${question.id}`}>{question.text}</label>
                    {question.chosen ? (
                        <div>
                            <input type='checkbox' id={`question.${question.id}`} {...register(`answers.${question.id}.text`)}></input>
                            <input type="hidden" id={`question.${question.id}`} value={question.id} {...register(`answers.${question.id}.question_id`)}/>
                        </div>
                        ) : <div>
                                <input type='text' id={`question.${question.id}`} {...register(`answers.${question.id}.text`)}></input>
                                <input type="hidden" id={`question.${question.id}`} value={question.id} {...register(`answers.${question.id}.question_id`)}/>
                            </div>
                        }
                    
                </div>)
            )}
            <button type="submit">Aceptar</button>
        </form>
    );
}

export default PatientRegistrationForm;
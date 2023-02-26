import React from 'react';
import s from "./style.module.css"
import { useDispatch } from "react-redux";

export default function UserAdd({createUser}) {

  const dispatch = useDispatch();

const onSubmit = event => {
    event.preventDefault();
    const {title, gender} = event.target;

    dispatch({
      type: 'ADD',
      payload: {
        id: Date.now(),
      title: title.value,
       gender: gender.value
      }
      
    })

    title.value = '';
    gender.value = '';

}

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Имя' name='title'/>
        <input type="url" placeholder='Ссылка на аватарку'name='avatar'/>
        <input type="text" placeholder='Пол' name='gender'/>
        <button>Добавить</button>
        
      </form>
    </div>
  )
}

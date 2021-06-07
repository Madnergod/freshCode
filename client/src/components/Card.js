import React from 'react'

export const Card = ({card}) =>{
    return(
        <div>
            <h2>Карточка</h2>
            <p>Ваша Задача:{card.title}</p>
            <p>Ваше описание Задачи:{card.description}</p>
            <p>Дата Создания:<strong>{new Date (card.date).toLocaleDateString()}</strong></p>
        </div>
    )
}
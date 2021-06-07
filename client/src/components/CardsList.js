import React from "react";
import {Link} from "react-router-dom";

export const CardsList = ({cards})=>{
    if (!cards.length){
        return <p className="center">Карточек пока нет</p>
    }
    return(
        <table>
            <thead>
            <tr>
                <th>Номер Карточки</th>
                <th>Автор</th>
                <th>Заголовок</th>
                <th>Описание</th>
            </tr>
            </thead>

            <tbody>
            {cards.map((card,index)=> {
                return(
                    <tr key={card._id}>
                        <td>{index+1}</td>
                        <td>{card._id}</td>
                        <td>{card.title}</td>
                        <td>{card.description}</td>
                        <td>
                            <Link to = {`detail/${card._id}`}>Открыть</Link>
                        </td>
                    </tr>
                )
            })}


            </tbody>
        </table>
    )
}
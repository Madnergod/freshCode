import React, {useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";
import {useHistory} from "react-router-dom";
export const CreatePage = ()=>{
    const history = useHistory()
    const auth = useContext(AuthContext)
    const [form, setForm] = useState({
        title: "",
        description: "",
    });
    const { loading, request, error, clearError } = useHttp();
    const message = useMessage();
    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };
    useEffect(() => {
        message(error);
        clearError()
    }, [error, message,clearError]);
    useEffect(()=>{
        window.M.updateTextFields()
    },[])
    const createHandler = async () => {
        try {
            const data = await request("/api/card/generate", "POST", { ...form },{
                Authorization: `Bearer ${auth.token}`
            });
            history.push(`/detail/${data.card._id}`)
            message(data.message)
        } catch (e) {}
    };
    return(
        <div className="row">
            <div className=".col.s6.offset-s3">
                <h1>Карточки</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Добавление Карточки</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Заголовок"
                                    id="title"
                                    type="text"
                                    name="title"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="title">Заголовок</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Описание"
                                    id="description"
                                    type="text"
                                    name="description"
                                    className="yellow-input"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="description">Описание</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{ marginRight: 10 }}
                            disabled={loading}
                            onClick={createHandler}

                        >Добавить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
import React, {useCallback, useContext, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/Loader";
import {CardsList} from "../components/CardsList";

export const CardsPage = ()=>{
    const [cards,setCards] = useState([])
    const {loading,request} = useHttp()
    const {token} = useContext(AuthContext)
    const fetchCards = useCallback(async ()=>{
         try{
             const fetched = await request('/api/card','GET',null,{
                 Authorization: `Bearer ${token}`
             })
             setCards(fetched)
         }catch (e) {
             
         }
    },[token,request])
    useEffect(()=>{
        fetchCards()
    },[fetchCards])
    if (loading){
        return <Loader/>
    }
    return(
        <>
            {!loading&&<CardsList cards = {cards}/>}
        </>
    )
}
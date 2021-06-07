import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import {CardsPage} from "./pages/CardsPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAuthenticated =>{
    if (isAuthenticated){
        return(
            <Switch>
                <Route path = "/cards" exact>
                    <CardsPage/>
                </Route>
                <Route path = "/create" exact>
                    <CreatePage/>
                </Route>
                <Route path = "/detail/:id" exact>
                    <DetailPage />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/">
                <AuthPage />
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}
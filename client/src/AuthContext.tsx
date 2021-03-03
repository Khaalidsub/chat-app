import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { AUTH_TOKEN } from "./utilities/constants"

const defaultContext = {
    auth: localStorage.getItem(AUTH_TOKEN),
    setAuth: (auth: any) => { },

}

export const AuthContext = React.createContext(defaultContext)
export const AuthContextProvider = (props: any) => {
    const setAuth = (auth: any) => {

        setstate({ ...state, auth: auth })

    };
    const initState = {
        //@ts-ignore
        ...defaultContext, setAuth: setAuth
    }


    const [state, setstate] = useState(initState)
    useEffect(() => {

        console.log('initState', initState, state);

    })



    return (<AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>)
}
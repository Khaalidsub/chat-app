import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { AUTH_TOKEN } from "./utilities/constants"
var isNode = typeof module !== 'undefined'

const isLocalStorage = () => {
    if (isNode) {
        if (typeof (localStorage) !== undefined)
            return localStorage.getItem(AUTH_TOKEN)
        return ''
    }
    return ''

}
const defaultContext = {
    auth: isLocalStorage(),
    setAuth: (auth: any, getCurrentUser: any) => { },

}

export const AuthContext = React.createContext(defaultContext)
export const AuthContextProvider = (props: any) => {
    const setAuth = (auth: any, getCurrentUser: any) => {

        setstate({ ...state, auth: auth })
        getCurrentUser();
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
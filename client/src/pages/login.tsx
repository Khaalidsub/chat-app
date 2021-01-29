import { useMutation } from "@apollo/client";
import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import LoginForm from "../Components/LoginForm";
import { AUTH_TOKEN } from "../utilities/constants";
import { LOGIN_USER } from "../utilities/schema";
import * as LoginTypes from "../utilities/__generated__/login";

export interface LoginProps {

    seterrorMessage: Function
    refetchCurrentUser: Function
}

export interface LoginState {

}

const Login = (props: LoginProps) => {
    const { auth, setAuth } = useContext(AuthContext)
    const [login, { loading, error, }] = useMutation<LoginTypes.login, LoginTypes.loginVariables>(LOGIN_USER, {
        onCompleted(data?) {


            if (data && data.loginUser) {
                localStorage.setItem(AUTH_TOKEN, data.loginUser)
                setAuth(data.loginUser, props.refetchCurrentUser)

            }


            // 

        }
    })
    if (loading) {
        return <div>loading</div>
    }
    if (error) {
        props.seterrorMessage(error)
    }

    return (<LoginForm login={login} />);

}

export default Login;
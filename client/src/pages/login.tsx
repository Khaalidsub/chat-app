import { useMutation } from "@apollo/client";
import React from "react";
import LoginForm from "../Components/LoginForm";
import { LOGIN_USER } from "../utilities/schema";
import { loginVariables, login } from "../utilities/__generated__/login";

export interface LoginProps {

}

export interface LoginState {

}

function Login() {
    const [login, { loading, error }] = useMutation<login, loginVariables>(LOGIN_USER, {
        onCompleted(data) {
            if (data) {
                console.log(data);

                localStorage.setItem('token', data.loginUser);

            }
        }
    })
    if (loading) {
        return <div>loading</div>
    }
    if (error) {
        return <div>error</div>
    }
    return (<LoginForm login={login} />);

}

export default Login;
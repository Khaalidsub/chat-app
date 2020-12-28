import PropTypes from 'prop-types'
import { Component } from 'react'
import { loginVariables } from '../utilities/__generated__/login'
import InputFieldForm from '../widgets/InputFieldForm'
import ButtonForm from '../widgets/ButtonForm'
import React from 'react'
export interface LoginProps {
    login: (a: { variables: loginVariables }) => void
}
export interface LoginState {
    email: string,
    username: string
}
class LoginForm extends Component<LoginProps, LoginState>{

    onChange = (event: any) => {

        this.setState({
            [event.target.name]: event.target.value
        } as LoginState);
    }
    onSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        this.props.login({ variables: { email: this.state.email, username: this.state.username } })
    }
    render() {
        return (
            <React.Fragment>

                <InputFieldForm label="username" />
                <InputFieldForm label="email" />
                <div className='text-center block w-full'>
                    <ButtonForm value='login' handler={this.onSubmit} />
                </div>
            </React.Fragment>
        )
    }
}



export default LoginForm


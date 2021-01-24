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
    state = { email: '', username: '' }

    onChange = (event: any) => {


        this.setState({
            [event.target.name]: event.target.value
        } as LoginState);
    }
    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.login({ variables: { email: this.state.email, username: this.state.username } })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>

                <InputFieldForm type="text" name="username" value={this.state.username} handler={this.onChange} label="Username" />
                <InputFieldForm type="email" name='email' value={this.state.email} handler={this.onChange} label="Email" />
                <div className='text-center block w-full'>
                    <ButtonForm value='login' />
                </div>
            </form>
        )
    }
}



export default LoginForm


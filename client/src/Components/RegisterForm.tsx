import React, { Component } from "react";

import { creatUserVariables } from "../utilities/__generated__/creatUser";
import ButtonForm from "../widgets/ButtonForm";
import InputFieldForm from "../widgets/InputFieldForm";

export interface RegisterProps {
    register: (a: { variables: creatUserVariables }) => void
}
export interface RegisterState {
    email: string,
    username: string
}

class RegisterForm extends Component<RegisterProps, RegisterState> {
    state = { email: '', username: '' }

    onChange = (event: any) => {


        this.setState({
            [event.target.name]: event.target.value
        } as RegisterState);
    }
    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.register({ variables: { createUserInput: { email: this.state.email, username: this.state.username } } })
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>

                <InputFieldForm type="text" name="username" value={this.state.username} handler={this.onChange} label="Username" />
                <InputFieldForm type="email" name='email' value={this.state.email} handler={this.onChange} label="Email" />
                <div className='text-center block w-full'>
                    <ButtonForm value='register' />
                </div>
            </form>
        )
    }
}



export default RegisterForm


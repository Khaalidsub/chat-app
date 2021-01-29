
import { loginVariables } from '../utilities/__generated__/login'
import InputFieldForm from '../widgets/InputFieldForm'
import ButtonForm from '../widgets/ButtonForm'
import { useState } from 'react'
export interface LoginProps {
    login: (a: { variables: loginVariables }) => void
}
export interface LoginState {
    email: string,
    username: string
}
const LoginForm = (props: LoginProps) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.login({ variables: { email: email, username: username } })
    }
    return (<form onSubmit={onSubmit}>

        <InputFieldForm type="text" name="username" value={username} handler={setUsername} label="Username" />
        <InputFieldForm type="email" name='email' value={email} handler={setEmail} label="Email" />
        <div className='text-center block w-full'>
            <ButtonForm value='login' />
        </div>
    </form>)
}


export default LoginForm



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
    const onChange = (event: any) => {
        if (event.target.name === 'email') setEmail(event.target.value)
        if (event.target.name === 'username') setUsername(event.target.value)
    }
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.login({ variables: { email: email, username: username } })
    }
    return (<form onSubmit={onSubmit}>
        hello
        <InputFieldForm type="text" name="username" value={username} handler={e => setUsername(e.target.value)} label="Username" />
        <InputFieldForm type="email" name='email' value={email} handler={e => setEmail(e.target.value)} label="Email" />
        <div className='text-center block w-full'>
            <ButtonForm value='login' />
        </div>
    </form>)
}


export default LoginForm


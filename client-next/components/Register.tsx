import { useMutation } from '@apollo/client';
import { creatUser, creatUserVariables } from '../utilities/__generated__/creatUser';
import { CREATE_USER } from "../utilities/schema";
import RegisterForm from "./RegisterForm";
export interface RegisterProps {
    setsignType: Function
    seterrorMessage: Function
}

export interface RegisterState {

}

const Register: React.FC<RegisterProps> = (props: RegisterProps) => {
    const [register, { loading, error, called }] = useMutation<creatUser, creatUserVariables>(CREATE_USER,
    )
    if (loading) {
        return <div>loading</div>
    }
    if (error) {
        props.seterrorMessage(error)
    }
    if (called) {
        props.setsignType()

    }

    return (<RegisterForm register={register} />);

}

export default Register;
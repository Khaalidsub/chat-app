import { useMutation } from '@apollo/client';
import { creatUser, creatUserVariables } from '../utilities/__generated__/creatUser';
import { CREATE_USER } from "../utilities/schema";
import RegisterForm from "../Components/RegisterForm";
export interface RegisterProps {

}

export interface RegisterState {

}

function Register() {
    const [register, { loading, error }] = useMutation<creatUser, creatUserVariables>(CREATE_USER,
    )
    if (loading) {
        return <div>loading</div>
    }
    if (error) {
        return <div>error</div>
    }


    return (<RegisterForm register={register} />);

}

export default Register;
import React from "react";
import { useMutation, useQuery } from '@apollo/client';
import { creatUser, creatUserVariables } from '../utilities/__generated__/creatUser';
import { CREATE_USER } from "../utilities/schema";
export interface RegisterProps {

}

export interface RegisterState {

}

function Register() {
    const [register, { loading, error }] = useMutation<creatUser, creatUserVariables>(CREATE_USER, {
        onCompleted(data) {
            if (data) {
                console.log(data.createUser.username);



            }
        }
    })
    // register({ variables: { createUserInput: { email: "khaalidsubaan@gmail.org", username: "khaalid" } } })


    return (<div className=''>hello</div>);

}

export default Register;
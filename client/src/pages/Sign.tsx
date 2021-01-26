import React, { useState } from "react";
import SignUp from "./register";
import SignIn from "./login";

export interface SignProps {
    fetchCurrentUser: Function;
}

export interface SignState { }

export enum SignType {
    register = "Register",
    login = "Login",
}

const Sign1: React.FC<SignProps> = (props: SignProps) => {
    const [signType, setsignType] = useState(SignType.register);
    const [errorMessage, seterrorMessage] = useState("");
    const RenderTypeForm = () => {
        return (
            <div className=" h-8 mx-auto mt-12 max-w-xs text-center grid grid-cols-2 bg-secondary-background rounded-full border border-customBlue">
                <button
                    onClick={() => setsignType(SignType.register)}
                    className="my-auto border-r  focus:text-secondary focus:shadow-inner rounded-full cursor-pointer focus:outline-none text-primary"
                >
                    Sign Up
        </button>

                <button
                    onClick={() => setsignType(SignType.login)}
                    className="my-auto border-l focus:text-secondary   focus:shadow-inner rounded-full cursor-pointer  focus:outline-none text-primary"
                >
                    Sign In
        </button>
            </div>
        );
    };
    const TypeForm = () => {
        return signType === SignType.register ? <SignUp setsignType={() => setsignType(SignType.login)} seterrorMessage={seterrorMessage} /> : <SignIn seterrorMessage={seterrorMessage} refetchCurrentUser={props.fetchCurrentUser} />;
    };
    return (
        <div className=" w-2/3 my-auto">
            <RenderTypeForm />

            <div className="w-full max-w-xl mx-auto mt-4 mb-12 border border-primary pl-5 pr-10 pb-10 md:pl-20 md:pr-20 md:pb-20 pt-5 rounded-lg shadow-lg">
                <h3 className="text-center text-3xl mb-4 font-bold text-primary  ">
                    {signType}
                </h3>
                <TypeForm />
            </div>
        </div>
    );
};


const Sign: React.FC<SignProps> = (props: SignProps) => {
    const [signType, setsignType] = useState(SignType.register);
    const [errorMessage, seterrorMessage] = useState("");
    const RenderTypeForm = () => {
        return (
            <div className="flex md:px-3 flex-column md:flex-row justify-between justify-items-center">
                <button
                    onClick={() => setsignType(SignType.register)}
                    className="bg-customBlue px-3 py-1 w-1/2 mr-4  focus:bg-customBlue-dark focus:shadow-inner rounded-xl cursor-pointer shadow-md text-white"
                >
                    Sign Up
        </button>

                <button
                    onClick={() => setsignType(SignType.login)}
                    className="bg-customBlue focus:bg-customBlue-dark px-3 ml-4 py-1 w-1/2 focus:shadow-inner rounded-xl cursor-pointer shadow-md text-white"
                >
                    Sign In
        </button>
            </div>
        );
    };
    const TypeForm = () => {
        return signType === SignType.register ? <SignUp setsignType={() => setsignType(SignType.login)} seterrorMessage={seterrorMessage} /> : <SignIn seterrorMessage={seterrorMessage} refetchCurrentUser={props.fetchCurrentUser} />;
    };
    return (
        <div className="w-2/3 md:w-1/2  lg:w-2/5 p-4 my-auto flex flex-col justify-between align-center border rounded-xl">
            <h3 className="text-center text-3xl mb-4 font-thin text-primary  ">
                {signType}
            </h3>
            <div className="mx-auto m-5">
                <h3 className="text-center text-xl italic">Welcome</h3>
            </div>
            <div className="w-full max-w-sm mx-auto">
                <RenderTypeForm />
            </div>


            <div className="w-full max-w-xl mx-auto mt-4  px-2 pb-10 lg:px-20 md:px-5 md:pb-2 pt-5 ">

                <TypeForm />
            </div>
        </div>
    );
};

export default Sign;

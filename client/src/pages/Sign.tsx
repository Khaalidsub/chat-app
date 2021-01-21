import React, { useState } from "react";
import SignUp from "./register";
import SignIn from "./login";

export interface SignProps {

}

export interface SignState { }

export enum SignType {
    register = "Register",
    login = "Login",
}

const Sign: React.FC<SignProps> = (props: SignProps) => {
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
        return signType === SignType.register ? <SignUp setsignType={() => setsignType(SignType.login)} seterrorMessage={seterrorMessage} /> : <SignIn seterrorMessage={seterrorMessage} />;
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

export default Sign;

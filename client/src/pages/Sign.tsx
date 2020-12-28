import React from "react";
import SignUp from "./Register";
import SignIn from "./Login";


export interface SignFormProps { }

export interface SignFormState { }

class SignForm extends React.Component<SignFormProps, SignFormState> {
    state = { type: "Register", errorMessage: "" };

    setMessage = (message: string) => {
        this.setState({ errorMessage: message });
    };

    render() {
        const typeForm =
            this.state.type === "Register" ? (
                <SignUp />
            ) : (
                    <SignIn />
                );
        return (
            <div

            >

                <div className=" h-8 mx-auto mt-12 max-w-xs text-center grid grid-cols-2 bg-secondary-background rounded-full border border-primary">
                    <button
                        onClick={() => this.setState({ type: "Register" })}
                        className="my-auto border-r  focus:text-secondary focus:shadow-inner rounded-full cursor-pointer focus:outline-none text-primary"
                    >
                        Sign Up
          </button>

                    <button
                        onClick={() => this.setState({ type: "Login" })}
                        className="my-auto border-l focus:text-secondary   focus:shadow-inner rounded-full cursor-pointer  focus:outline-none text-primary"
                    >
                        Sign In
          </button>
                </div>

                <div className="w-full max-w-xl mx-auto mt-4 mb-12 border border-primary pl-20 pr-20 pb-20 pt-5 rounded-lg shadow-lg">
                    <h3 className="text-center text-3xl mb-4 font-bold text-primary  ">
                        {this.state.type}
                    </h3>
                    {typeForm}
                </div>
            </div>
        );
    }
}

export default SignForm;
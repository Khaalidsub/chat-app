import React from "react";
import SignUp from "./register";
import SignIn from "./login";


export interface SignProps { }

export interface SignState { }

class Sign extends React.Component<SignProps, SignState> {
    state = { type: "Register", errorMessage: "" };

    setMessage = (message: string) => {
        this.setState({ errorMessage: message });
    };

    renderTypeForm = () => {
        return (
            <div className=" h-8 mx-auto mt-12 max-w-xs text-center grid grid-cols-2 bg-secondary-background rounded-full border border-customBlue">
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
        )
    }

    render() {
        const typeForm =
            this.state.type === "Register" ? (
                <SignUp />
            ) : (
                    <SignIn />
                );
        return (
            <div
                className=" w-2/3 my-auto"
            >

                {this.renderTypeForm()}

                <div className="w-full max-w-xl mx-auto mt-4 mb-12 border border-primary pl-5 pr-10 pb-10 md:pl-20 md:pr-20 md:pb-20 pt-5 rounded-lg shadow-lg">
                    <h3 className="text-center text-3xl mb-4 font-bold text-primary  ">
                        {this.state.type}
                    </h3>
                    {typeForm}
                </div>
            </div>
        );
    }
}

export default Sign;
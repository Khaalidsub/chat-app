
function InputField(props: InputFieldProps) {
    return (
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
                <label
                    htmlFor={props.label}
                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                >
                    {props.label}
                </label>
            </div>
            <div className="w-full">
                <input

                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-customBlue"


                />

            </div>
        </div>
    )
}

interface InputFieldProps {
    label: string,

}



export default InputField


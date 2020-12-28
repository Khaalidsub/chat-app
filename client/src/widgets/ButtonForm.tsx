

function Button(props: ButtonProps) {
    return (
        <button onClick={() => props.handler} className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-customBlue-light hover:bg-customBlue">
            {props.value}
        </button>
    )
}

interface ButtonProps {
    handler: Function,
    value: string,

}



export default Button


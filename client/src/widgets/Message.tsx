import React from "react"


function Message(props: MessageProp): JSX.Element {
    return (
        <React.Fragment>
            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <img className="h-12 w-12" src={`${props.image}`} alt="ChitChat Logo" />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">{props.user}</div>
                    <p className="text-gray-500">{props.message}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

interface MessageProp {
    message: string,
    user: string,
    image: string

}


export default Message


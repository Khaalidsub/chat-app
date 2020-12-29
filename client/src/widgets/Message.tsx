import React from "react"


function Message(props: MessageProp): JSX.Element {
    return (
        <div className="w-full flex justify-between items-center p-2">
            <div className="flex-shrink-0 m-2">
                <img className="h-12 w-12 rounded-full" src={props.image} alt="user" />
            </div>
            <div className={`pt-3 pb-4 pl-3 pr-4  mx-auto bg-${props.color} rounded-xl shadow-md`}>


                <div className="text-md font-medium text-black">{props.user}</div>
                <p className="text-gray-500">{props.message}</p>

            </div>
        </div>
    )
}

interface MessageProp {
    message: string,
    user: string,
    image: string
    color: string
}


export default Message


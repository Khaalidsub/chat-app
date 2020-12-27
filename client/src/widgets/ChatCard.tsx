import React from "react"


function ChatCard(props: ChatCardProp): JSX.Element {
    return (
        <React.Fragment>
            <div className={`hover:bg-gray-100 pointer cursor p-6 w-full  bg-${props.color}  flex items-center space-x-4 border-b border-gray-300 rounded-xl shadow-md`}>
                <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-lg" src={props.image} alt="user" />
                </div>
                <div>
                    <div className="text-xl font-medium text-black">{props.chat}</div>
                    <p className="text-gray-500">{props.lastMessage}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

interface ChatCardProp {
    lastMessage: string,
    chat: string,
    image: string
    color: string
}


export default ChatCard


import React from "react"


function ChatCard(props: ChatCardProp): JSX.Element {
    return (
        <React.Fragment>
            <div className={`hover:bg-customBlue-dark rounded-l-full pointer cursor p-6 w-full  flex items-center space-x-4 `}>
                <div className="flex-shrink-0">
                    <img className="h-12 w-12 rounded-lg" src={props.image} alt="user" />
                </div>
                <div>
                    <div className="text-xl font-medium text-gray-50">{props.chat}</div>
                    <p className="text-gray-100">{props.description}</p>
                </div>
            </div>
        </React.Fragment>
    )
}

interface ChatCardProp {
    description: string,
    chat: string,
    image: string

}


export default ChatCard


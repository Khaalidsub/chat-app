import { useMutation, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { CHAT_MESSAGES, CURRENT_USER, MESSAGES, MESSAGE_ADDED, SEND_MESSAGE } from "../utilities/schema";
import { chatMessages, chatMessagesVariables, chatMessages_chatMessages } from "../utilities/__generated__/chatMessages";
import { currentUser, currentUser_currentUser } from "../utilities/__generated__/currentUser";
import { messages } from "../utilities/__generated__/messages";
import { sendMessage, sendMessageVariables } from "../utilities/__generated__/sendMessage";
import Message from "../widgets/Message";

export interface ChatProps {
    currentChat: string
    user: currentUser_currentUser
    messages: chatMessages_chatMessages[]
    subscribeToMore: Function
}

export interface ChatState {

}

export interface chatMesagesProps {
    chatMessages: chatMessages_chatMessages[]
}




const Chat: React.FC<ChatProps> = (props: ChatProps) => {

    const [message, setMessage] = useState('');


    useEffect(() => {
        console.log('hello , i have been called', props.messages);

        props.subscribeToMore()
    }, [])


    const [sendMessage, { loading, error }] = useMutation<sendMessage, sendMessageVariables>(SEND_MESSAGE)

    const ChatMessages = () => {
        return (
            <React.Fragment>
                {  props.messages.map((message) => {
                    const color = message.sender.id === props.user.id ? 'green-100' : 'white'

                    return <Message key={message.id} color={color} message={message.message} user={message.sender.username} image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" />
                })}
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <div className=" relative h-full">

                <div className='h-5/6 overflow-auto'>





                    <ChatMessages />



                </div>

                <div className="absolute bottom-0 left-0 right-0 w-full flex justify-between bg-blue-100 outline-none rounded-xl" >
                    <textarea
                        className=" outline-none font-sans flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-50"

                        placeholder="Message..."
                        rows={1}
                        onChange={(e) => setMessage(e.target.value)}

                    ></textarea>
                    <button className="m-2" onClick={() => { sendMessage({ variables: { createMessageInput: { chat: props.currentChat, message: message, sender: props.user.id, } } }); setMessage('') }} >
                        <svg
                            className="svg-inline--fa text-customBlue-light fa-paper-plane fa-w-16 w-12 h-12 py-2 mr-2"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="paper-plane"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path
                                fill="currentColor"
                                d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                            />
                        </svg>
                    </button>
                </div>

            </div>

        </React.Fragment >
    );




}

export default Chat;
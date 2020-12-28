import React from "react";
import Message from "../widgets/Message";

export interface ChatProps {
    currentChat: string
}

export interface ChatState {

}

const Chat: React.FC<ChatProps> = (props: ChatProps) => {

    // const { data, loading, error } = useQuery<messages>(CURRENT_USER)


    return (
        <React.Fragment>
            <div className=" relative h-full">

                <div className='h-5/6 overflow-auto'>



                    <Message color='green-100' message="Hello" user="John" image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" />



                    <Message color='white' message="Hello" user="Khaalid" image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" />
                    <Message color='white' message="Hello" user="Khaalid" image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" />

                </div>

                <div className="absolute bottom-0 left-0 right-0 w-full flex justify-between bg-blue-100 outline-none rounded-xl" >
                    <textarea
                        className=" outline-none font-sans flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-50"

                        placeholder="Message..."
                        rows={1}

                    ></textarea>
                    <button className="m-2" >
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
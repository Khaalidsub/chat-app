import React from "react";
import Message from "../widgets/Message";

export interface ChatProps {

}

export interface ChatState {

}

class Chat extends React.Component<ChatProps, ChatState> {

    render() {
        return (<div className="p-4 overflow-auto h-full">


            <Message color='green-100' message="Hello" user="John" image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" />



            <Message color='white' message="Hello" user="Khaalid" image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" />
            <Message color='white' message="Hello" user="Khaalid" image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" />


        </div>);
    }
}

export default Chat;
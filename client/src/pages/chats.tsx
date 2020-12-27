import React from "react";
import ChatCard from "../widgets/ChatCard";

export interface ChatsProps {
    // chats?: JSX.Element[]

}

export interface ChatsState {

}

const chatList = [
    ChatCard({ chat: "broChat", color: "white", lastMessage: "hello", image: "https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" }),
    ChatCard({ chat: "broChat", color: "white", lastMessage: "hello", image: "https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" }),
    ChatCard({ chat: "broChat", color: "white", lastMessage: "hello", image: "https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" }),
];
class Chats extends React.Component<ChatsProps, ChatsState> {

    renderChats() {
        return chatList;
    }


    render() {
        return (<div className='bg-white h-full'>
            {this.renderChats()}
        </div>);
    }
}

export default Chats;
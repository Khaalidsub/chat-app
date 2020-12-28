import React from "react";
import { chats_chats } from "../utilities/__generated__/chats";
import ChatCard from "../widgets/ChatCard";
import SearchField from "../widgets/SearchField";

export interface ChatsProps {
    chats: chats_chats[]
    onClick: Function;

}

export interface ChatsState {

}


class Chats extends React.Component<ChatsProps, ChatsState> {

    renderChats() {
        return this.props.chats.map((chat) => {
            return <ChatCard onClick={this.props.onClick} id={chat.id} chat={chat.ChatName} description={chat.description} image={"https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"} />;
        });
    }


    render() {
        return (<div className='bg-customBlue-light h-full pl-5 rounded-l-3xl overflow-auto w-full'>
            <SearchField />
            {this.renderChats()}
        </div>);
    }
}

export default Chats;
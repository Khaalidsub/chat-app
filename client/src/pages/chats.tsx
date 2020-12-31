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
            return <ChatCard key={chat.id} onClick={this.props.onClick} id={chat.id} chat={chat.ChatName} description={chat.description} image={"https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"} />;
        });
    }


    render() {
        return (<div className='bg-customBlue-light h-full pl-5 rounded-l-3xl overflow-auto w-full relative'>
            <SearchField />
            {this.renderChats()}
            <div className='cursor-pointer rounded-full bottom-6 right-6 h-12 w-12 absolute bg-customBlue-dark text-white pt-3'>
                <svg className='block mx-auto my-auto text-white' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill="currentColor" d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" /></svg>
            </div>
        </div>);
    }
}

export default Chats;
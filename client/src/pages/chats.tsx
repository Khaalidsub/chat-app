import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { USERS } from "../utilities/schema";
import { chats_chats } from "../utilities/__generated__/chats";
import { users } from "../utilities/__generated__/users";
import ChatCard from "../widgets/ChatCard";
import SearchField from "../widgets/SearchField";
import UserCard from "../widgets/UserCard";

export interface ChatsProps {
    chats: chats_chats[]
    onClick: Function;

}

export interface Chats {
    isCreatingChat: boolean


}


const Chats: React.FC<ChatsProps> = (props: ChatsProps) => {
    const [isCreatingChat, setisCreatingChat] = useState(false)
    const [search, setsearch] = useState('')
    const [users, setusers] = useState([''])
    const { data, loading, error } = useQuery<users>(USERS)
    const renderChats = () => {
        return props.chats.map((chat) => {
            return <ChatCard key={chat.id} onClick={props.onClick} id={chat.id} chat={chat.ChatName} description={chat.description} image={"https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"} />;
        });
    }
    const renderUsers = () => {
        const result = data ? data.users.filter((user) => user.email.includes(search)) : [];
        return result.map((user) => {
            return <UserCard key={user.id} id={user.id} username={user.username} email={user.email} image={"https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80"} />;
        })
    }

    const renderOptions = () => {
        if (isCreatingChat) {
            return <div className='bg-customBlue-light h-full pl-5 rounded-l-3xl overflow-auto w-full relative'>
                <SearchField placeholder='enter email of user' search={search} onChange={setsearch} />

                {renderUsers()}
            </div>
        } else {
            return (<div className='bg-customBlue-light h-full pl-5 rounded-l-3xl overflow-auto w-full relative'>
                <SearchField placeholder='enter chat name' search={search} onChange={setsearch} />
                {renderChats()}
                <div onClick={() => setisCreatingChat(true)} className='cursor-pointer rounded-full bottom-6 right-6 h-12 w-12 absolute bg-customBlue-dark text-white pt-3'>
                    <svg className='block mx-auto my-auto text-white' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path fill="currentColor" d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" /></svg>
                </div>
            </div>);
        }
    }




    return <React.Fragment>
        {renderOptions()}
    </React.Fragment>;

}

export default Chats;
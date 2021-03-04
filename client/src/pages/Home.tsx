import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { CHATS, CHAT_ADDED, CHAT_MESSAGES, MESSAGE_ADDED } from '../utilities/schema'
import { chatMessages, chatMessagesVariables } from '../utilities/__generated__/chatMessages'
import { chats } from '../utilities/__generated__/chats'
import { currentUser_currentUser } from '../utilities/__generated__/currentUser'
import { onChatCreated, onChatCreated_onChatCreations } from '../utilities/__generated__/onChatCreated'
import { onChatMessage } from '../utilities/__generated__/onChatMessage'
import Chat from './chat'
import Chats from './chats'

export interface HomeProps {
    currentUser: currentUser_currentUser
}

function Home(props: HomeProps) {
    const { data, loading, error, subscribeToMore } = useQuery<chats>(CHATS)
    const [currentChat, setCurrentChat] = useState('');
    const [showChat, setshowChat] = useState(true)
    // useEffect(() => {

    //     // if (showChat) setCurrentChat(null)

    // }, [showChat])
    const { ...result } = useQuery<chatMessages, chatMessagesVariables>(CHAT_MESSAGES, { variables: { id: currentChat, } })
    const settingCurrentChat = (value: string) => {
        setCurrentChat(value)
        setshowChat(false);
    }

    const subscribeToMoreChats = () =>
        subscribeToMore<onChatCreated>({
            document: CHAT_ADDED,
            updateQuery: (prev, { subscriptionData }) => {
                console.log('in sub sub', subscriptionData);

                if (!subscriptionData.data) return prev
                const newChats = subscriptionData.data.onChatCreations
                return Object.assign({}, prev, {
                    chats: [...prev.chats, newChats]
                });

            }
        })


    const subscribeToNewMessages = () =>
        result.subscribeToMore<onChatMessage>({
            document: MESSAGE_ADDED,
            variables: { id: currentChat },
            updateQuery: (prev, { subscriptionData }) => {
                console.log('in sub sub', subscriptionData);

                if (!subscriptionData.data) return prev
                const newMessages = subscriptionData.data.onChatMessage
                return Object.assign({}, prev, {
                    chatMessages: [...prev.chatMessages, newMessages]
                });


            }

        })


    return (
        <React.Fragment>
            <div className="flex justify-center">


                <div className="md:h-2/3 md:w-2/3 w-full h-4/5 px-4  mx-auto my-auto flex flex-row py-px border border-gray-50 bg-gray-50 rounded-3xl shadow-lg">
                    <div className={`md:w-2/5 md:flex w-full ${showChat ? '' : 'hidden'}`}>
                        <Chats currentChat={currentChat} subscribeToMore={subscribeToMoreChats} chats={data ? data.chats : []} onClick={settingCurrentChat} currentUser={props.currentUser.id} />
                    </div>

                    <div className={`w-full md:w-3/5 pt-3 rounded-3xl md:block ${!showChat ? '' : 'hidden'} `}>
                        <button className='text-customBlue pl-2 pb-2 md:hidden' onClick={() => setshowChat(true)}>Back</button>
                        {currentChat.length > 1 ? <Chat chatMessages={result.data ? result.data.chatMessages : []} user={props.currentUser} subscribeToMore={subscribeToNewMessages} currentChat={currentChat} /> : <div></div>}
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}
export default Home
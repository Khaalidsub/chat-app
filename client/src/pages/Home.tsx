import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { CHATS, CHAT_MESSAGES, MESSAGE_ADDED } from '../utilities/schema'
import { chatMessages, chatMessagesVariables } from '../utilities/__generated__/chatMessages'
import { chats } from '../utilities/__generated__/chats'
import { currentUser_currentUser } from '../utilities/__generated__/currentUser'
import { onChatMessage } from '../utilities/__generated__/onChatMessage'
import { onChatMessages } from '../utilities/__generated__/onChatMessages'
import Message from '../widgets/Message'
import Chat from './Chat'
import Chats from './Chats'

export interface HomeProps {
    currentUser: currentUser_currentUser
}

function Home(props: HomeProps) {
    const { data, loading, error } = useQuery<chats>(CHATS)
    const [currentChat, setCurrentChat] = useState('5fead5a45273cf3cf88a21df');

    const { ...result } = useQuery<chatMessages, chatMessagesVariables>(CHAT_MESSAGES, { variables: { id: currentChat } })
    const subscribeToNewMessages = () =>
        result.subscribeToMore<onChatMessage>({
            document: MESSAGE_ADDED,
            variables: { id: currentChat },
            updateQuery: (prev, { subscriptionData }) => {
                console.log('in sub sub', subscriptionData);

                if (!subscriptionData.data) return prev
                const newMessages = subscriptionData.data.onChatMessage
                return Object.assign({}, prev, {
                    chatMessages: [...prev.chatMessages, newMessages,]
                });


            }
        })

    return (
        <React.Fragment>
            <div className="flex justify-center">


                <div className="md:h-2/3 md:w-4/5 h-full w-full mx-auto my-auto flex flex-row py-px border border-gray-50 bg-gray-50 rounded-3xl shadow-lg">
                    <div className="md:w-2/5 md:flex hidden">
                        <Chats chats={data ? data.chats : []} onClick={setCurrentChat} />
                    </div>

                    <div className="w-full">
                        <Chat subscribeToMore={() => subscribeToNewMessages()} messages={result.data ? result.data.chatMessages : []} user={props.currentUser} currentChat={currentChat} />
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}
export default Home
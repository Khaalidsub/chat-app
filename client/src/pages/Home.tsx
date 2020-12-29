import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { CHATS } from '../utilities/schema'
import { chats } from '../utilities/__generated__/chats'
import { currentUser_currentUser } from '../utilities/__generated__/currentUser'
import Message from '../widgets/Message'
import Chat from './Chat'
import Chats from './Chats'

export interface HomeProps {
    currentUser: currentUser_currentUser
}

function Home(props: HomeProps) {
    const { data, loading, error } = useQuery<chats>(CHATS)
    const [currentChat, setCurrentChat] = useState('5fe99f1199ee428e30a092d4');

    return (
        <React.Fragment>
            <div className="flex justify-center">


                <div className="md:h-2/3 md:w-4/5 h-full w-full mx-auto my-auto flex flex-row py-px border border-gray-50 bg-gray-50 rounded-3xl shadow-lg">
                    <div className="md:w-2/5 md:flex hidden">
                        <Chats chats={data ? data.chats : []} onClick={setCurrentChat} />
                    </div>

                    <div className="w-full">
                        <Chat user={props.currentUser} currentChat={currentChat} />
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}
export default Home
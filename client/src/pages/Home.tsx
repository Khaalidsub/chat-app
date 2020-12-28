import { useQuery } from '@apollo/client'
import React from 'react'
import { CHATS } from '../utilities/schema'
import { chats } from '../utilities/__generated__/chats'
import Message from '../widgets/Message'
import Chat from './Chat'
import Chats from './Chats'

function Home() {
    const { data, loading, error } = useQuery<chats>(CHATS)


    return (
        <React.Fragment>
            <div className="flex justify-center">


                <div className="md:h-2/3 md:w-4/5 h-full w-full mx-auto my-auto flex flex-row py-px border border-gray-50 bg-gray-50 rounded-3xl shadow-lg">
                    <div className="md:w-2/5 md:flex hidden">
                        <Chats chats={data ? data.chats : []} />
                    </div>

                    <div className="w-full">
                        <Chat />
                    </div>

                </div>

            </div>
        </React.Fragment>
    )
}
export default Home
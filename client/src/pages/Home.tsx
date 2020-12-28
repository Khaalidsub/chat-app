import React from 'react'
import Message from '../widgets/Message'
import Chat from './Chat'
import Chats from './Chats'

function Home() {
    return (
        <React.Fragment>
            <div className="flex justify-center">


                <div className="md:h-2/3 md:w-4/5 h-full w-full mx-auto my-auto flex flex-row py-px border border-gray-50 bg-gray-50 rounded-3xl shadow-lg">
                    <div className="md:w-2/5 md:flex hidden">
                        <Chats />
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
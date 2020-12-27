import React from 'react'
import Message from '../widgets/Message'

function Home() {
    return (
        <React.Fragment>
            {/* <div className="fixed mx-auto">
                <p>Chat</p>
            </div> */}

            <div className='  w-72'>
                <Message color='green-100' message="Hello" user="John" image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" />

            </div>
            <div className='  w-72'>
                <Message color='white' message="Hello" user="Khaalid" image="https://images.unsplash.com/photo-1541250628459-d8f2f0157289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQzMzEwfQ&auto=format&fit=crop&w=1350&q=80" />

            </div>
        </React.Fragment>
    )
}
export default Home
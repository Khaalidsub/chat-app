
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import Chat from './pages/Chat';
import Chats from './pages/Chats';
import Register from './pages/Register'
import { CURRENT_USER } from './utilities/schema';
import { currentUser } from './utilities/__generated__/currentUser';
import Sign from './pages/Sign'

function App() {

  const { data, loading, error } = useQuery<currentUser>(CURRENT_USER)
  const [] = useState(false);

  const RenderSign = () => {
    return <div className='flex justify-center'>
      <Sign />
    </div>
  }



  if (loading)
    return <RenderSign />
  if (error || !data)
    return <RenderSign />

  return (

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
  );
}

export default App;


import { useQuery } from '@apollo/client';
import React from 'react';

import { CURRENT_USER } from './utilities/schema';
import { currentUser } from './utilities/__generated__/currentUser';
import Sign from './pages/Sign'
import Home from './pages/Home';


function App() {
  const { data, loading, error } = useQuery<currentUser>(CURRENT_USER)



  const RenderSign = () => {
    return <div className='flex justify-center'>
      <Sign />
    </div>
  }



  // if (loading)
  //   return <RenderSign />
  // if (error || !data)

  //   return <RenderSign />

  return (
    data ? <Home /> : <RenderSign />


  );
}

export default App;

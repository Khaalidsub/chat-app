
import { NetworkStatus, useQuery } from '@apollo/client';
import React, { useEffect } from 'react';

import { CURRENT_USER } from './utilities/schema';
import { currentUser } from './utilities/__generated__/currentUser';
import Sign from './pages/Sign'
import Home from './pages/Home';


function App() {
  const { data, loading, error, refetch } = useQuery<currentUser>(CURRENT_USER, { notifyOnNetworkStatusChange: true, })

  const refetchUser = () => {

    refetch()

  }


  const RenderSign = () => {
    return <div className='flex justify-center'>
      <Sign fetchCurrentUser={refetchUser} />
    </div>
  }





  // if (loading)
  //   return <div>'loading!'</div>;
  if (data && data.currentUser)
    return <Home currentUser={data.currentUser} />

  return (
    <RenderSign />


  );
}

export default App;

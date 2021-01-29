
import { NetworkStatus, useQuery } from '@apollo/client';
import React, { useContext, useEffect } from 'react';

import { CURRENT_USER } from './utilities/schema';
import { currentUser } from './utilities/__generated__/currentUser';
import Sign from './pages/Sign'
import Home from './pages/Home';
import { AuthContext } from './AuthContext';
import { authHttpLink } from './utilities/constants';


function App() {
  const { auth } = useContext(AuthContext)


  const { data, loading, error, refetch } = useQuery<currentUser>(CURRENT_USER, { notifyOnNetworkStatusChange: true, context: authHttpLink })

  const refetchUser = () => {

    refetch()



  }
  useEffect(() => {
    if (auth) {
      refetchUser();
    }

    console.log('in app :', data?.currentUser, auth);
  }, [auth])

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

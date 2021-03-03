
import { NetworkStatus, useQuery } from '@apollo/client';
import React, { useContext, useEffect, useMemo } from 'react';

import { CURRENT_USER } from './utilities/schema';
import { currentUser } from './utilities/__generated__/currentUser';
import Sign from './pages/Sign'
import Home from './pages/Home';
import { AuthContext } from './AuthContext';
import { authHttpLink, AUTH_TOKEN } from './utilities/constants';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const { auth } = useContext(AuthContext)


  const { data, loading, error, refetch } = useQuery<currentUser>(CURRENT_USER, { notifyOnNetworkStatusChange: true, })


  useEffect(() => {
    console.log('hello', auth, localStorage.getItem(AUTH_TOKEN));
    refetch()?.then((data) => {
      console.log('data', data);

    }).catch((error) => {
      console.error(error);

    })
    console.log('user', data);


  }, [auth])



  return (
    <Router>
      <Switch>

        {data?.currentUser && (<Route path='/'  >
          <Home currentUser={data.currentUser} />
        </Route>)}
        <Route path='/' component={Sign} />


      </Switch>
    </Router>



  );
}

export default App;

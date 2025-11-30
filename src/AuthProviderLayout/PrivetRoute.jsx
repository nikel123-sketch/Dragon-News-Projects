import React, { use } from 'react';
import { Authcontex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Lodding from '../Component/Lodding';

const PrivetRoute = ({ children }) => {
    
    const { user, setlodding ,lodding} = use(Authcontex);
   

    const location = useLocation();
    

    if(lodding){
        return <Lodding></Lodding>;
    }

    if(user &&user?.email){
        return children;
    }
    else{
       return <Navigate state={location.pathname} to="/authlayout/login"></Navigate>;
    }
  
};

export default PrivetRoute;
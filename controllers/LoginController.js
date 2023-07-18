import { SendRequest } from '../helper';
import React, { useState } from 'react';

const LoginController =  () => {
    const [userInformation, setUserInformation] = useState({
        email: '',
        name: '',
        is_auth: false,
    });

  


    const  loginEX = async  (Email, Password) => {

        const request = await SendRequest('login', 'POST', {
            email: Email,
            password: Password
        });
        if (request.status === true) {
            setUserInformation({
                email: Email,
                name: request.data?.user?.name,
                is_auth: true,
            });
            return true;
        }
        return false;
    };


    
  const loginEx1 =  (Email, Password)=> {
    try {
      const request =  SendRequest('login', 'POST', {
        email: Email,
        password: Password
      });
      if (request.status === true) {
        setUserInformation({
          email: Email,
          name: request.data?.user?.name,
          is_auth: true,
        });
        return true;
      }
    } catch (error) {
      console.error(error);
    }
    return false;
  };

  const login = async (Email, Password) => {
   
    try {
     request = await SendRequest('login', 'POST', {
        email: Email,
        password: Password
      });
      
    
      if (request.status === 'success') {
        
        setUserInformation({
          email: Email,
          name: request.data?.user?.name,
          is_auth: true,
        });
        return true;
      }
    } catch (error) {
     // console.error(error);
     return false;
    }
  };
  

    // Diğer bileşen kodları
    return {
        login,
        userInformation
    }
};

export default LoginController;

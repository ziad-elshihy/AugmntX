import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useState } from 'react';

const LogInGoogle = () => {
   const [user, setUser] = useState([])
   const onSuccess = (credentialResponse) => {
      const decodedCredentialResponse = jwt_decode(
         credentialResponse.credential
      )
      setUser([...user ,decodedCredentialResponse])
      console.log(decodedCredentialResponse);
   }

   const onError = () => {
      console.log('Login Failed');
   }
   
   return (
      <GoogleLogin
         theme='filled_blue'
         onSuccess={onSuccess}
         onError={onError}
      />
   );
};

export default LogInGoogle;

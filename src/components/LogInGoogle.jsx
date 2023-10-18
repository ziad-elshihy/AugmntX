import { GoogleLogin } from '@react-oauth/google';
// import jwt from 'jsonwebtoken';

const LogInGoogle = () => {

   const onSuccess = (credentialResponse) => {
      console.log(credentialResponse);
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

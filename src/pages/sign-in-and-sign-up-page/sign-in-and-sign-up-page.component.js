import React from 'react';
import './sign-in-and-sign-up-page.style.scss'
import SignIn from '../../components/sign-in/sign-in.components';
import SignUp from '../../components/sign-up/sign-up.component';

const SignIAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
     <SignIn/>
     <SignUp/>
    </div>
);
export default SignIAndSignUpPage;
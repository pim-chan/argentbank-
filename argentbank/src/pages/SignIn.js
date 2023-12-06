import React from 'react';
import SignInForm from '../components/SignInForm';
import UserIcon from '../components/UserIcon';

const SignIn = () => {
    return (
        <main className='signin'>
            <section className='signin-content'>
                <UserIcon/>
                <h1 className='signin-content__title'>Sign In</h1>
                <SignInForm/>
            </section>
        </main>
    );
};

export default SignIn;
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../reducers/userSlice';
import UserIcon from './UserIcon';

const SignInLink = () => {

    const userData = useSelector(selectUser);

    return (
        <div className='signin-link-container'>
            <UserIcon/>
            {userData ? ( 
                <p>{userData.userName}</p> 
            ) : (
                <p>Sign In</p>
            )}
        </div>
    );
};

export default SignInLink;
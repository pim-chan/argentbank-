import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo';
import SignInLink from '../components/SignInLink';
import Logout from '../components/Logout'; 
import { selectUser } from '../reducers/userSlice';

const MainNav = () => {
    const isConnected = useSelector(selectUser); 

    return (
        <div className='main-nav'>
            <NavLink to="/">
                <Logo />
            </NavLink>
            <div className="main-nav__items">
                    <NavLink to="/signin">
                        <SignInLink />
                    </NavLink>
                {isConnected ? ( 
                    <Logout /> 
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default MainNav;

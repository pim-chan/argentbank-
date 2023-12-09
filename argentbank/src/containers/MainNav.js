import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SignInLink from '../components/SignInLink';
import Logout from '../components/Logout'; 
import { selectUser } from '../reducers/userSlice';

const MainNav = () => {
    const isConnected = useSelector(selectUser); 

    return (
        <div className='main-nav'>
            <NavLink to="/">
                <img src="./images/argentBankLogo.webp" className='logo' alt="Logo ArgentBank" />
            </NavLink>
            <div className="main-nav__items">
            {isConnected ? ( 
                <><NavLink to="/profil">
                    <SignInLink />
                </NavLink>
                <Logout /></>
                ) : (
                <NavLink to="/signin">
                    <SignInLink />
                </NavLink>
                )}
            </div>
        </div>
    );
};

export default MainNav;

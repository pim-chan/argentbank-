import React from 'react';
import MainNav from '../containers/MainNav';
import Footer from '../containers/Footer';

const MainLayout = (props) => {
    return (
        <div className='page'>
            <MainNav/>
                {props.children}
            <Footer/>
        </div>
    );
};

export default MainLayout;
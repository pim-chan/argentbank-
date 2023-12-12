import React, { useEffect } from 'react';
import Account from '../components/Account';
import UserForm from '../components/UserForm';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectToken } from '../reducers/userSlice';
import { getUserProfile } from '../reducers/userSlice';

const User = () => {
    
    const token = useSelector(selectToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!token) {
          navigate('/');
          return;
        }
      
        dispatch(getUserProfile())

        .catch((error) => {
          console.error('Erreur lors de la récupération du profil :', error);
        });
    }, [navigate, dispatch]);
  
      

    return (
        <main className='user'>
            <UserForm/>
            <section className='accounts-container'>
                <Account
                title={"Argent Bank Checking (x8349)"}
                amount={"$2,082.79"}
                description={"Available Balance"}
                />
                <Account
                title={"Argent Bank Savings (x6712)"}
                amount={"$10,928.42"}
                description={"Available Balance"}
                />
                <Account
                title={"Argent Bank Checking (x8349)"}
                amount={"$184.30"}
                description={"Current Balance"}
                />            
            </section>
        </main>
    );
};

export default User;
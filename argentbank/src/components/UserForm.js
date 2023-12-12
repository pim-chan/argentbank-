import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { selectToken, selectUser, updateUsername, userProfile } from '../reducers/userSlice';
import axios from 'axios';

const UserForm = () => {

    const userData = useSelector(selectUser);
    const token = useSelector(selectToken);
    const [username, setUsername] = useState('')
    const [isEditing, setIsEditing] = useState(false);

    const dispatch = useDispatch() 

    const handleEditUsername = async (e) => {
        e.preventDefault();

        try {
            const formData = {
                userName: username
            };
            const config = {
                method: 'PUT',
                headers: {
                  'Authorization': `Bearer ${token}`,
                },
            };

            const response = await axios.put('http://localhost:3001/api/v1/user/profile', formData, config);
            const editedProfile = response.data.body;
            dispatch(userProfile(editedProfile))
            setIsEditing(false)
            
        } catch (error) {
            console.error('Erreur lors de la connexion :', error);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <form className='user-form' onSubmit={(e) => handleEditUsername(e)}>
                <div className='input-wrapper'>
                    <label htmlFor="username">User name:</label>
                    <input
                        className='input'
                        type="text"
                        id="user-name"
                        value={username} 
                        placeholder= {userData.userName}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor="firstname">First name:</label>
                    <input
                        className='input'
                        type="text"
                        id="firstname"
                        defaultValue={userData.firstName}
                        disabled
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor="lastname">Last name:</label>
                    <input
                        className='input'
                        type="text"
                        id="lastname"
                        defaultValue={userData.lastName}
                        disabled
                    />
                </div>
                <div className="user-form__buttons">
                    <button className='button' type='submit' onClick={(e) => handleEditUsername(e)}>Save</button>
                    <button className='button' onClick={() => handleCancel()}>Cancel</button>
                </div>   
            </form>
            ) : (
                <div className="user-infos">
                    <h1>Welcome Back {userData && userData.userName ? userData.userName : ""} !</h1>
                    <button className='button' onClick={() => setIsEditing(true)}>Edit Name</button>
                </div>
            )}
        </div>
    );
};

export default UserForm;
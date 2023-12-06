import React from 'react';

const EditUser = () => {

    return (
        <div>
            <div>
                <label htmlFor="password">User name</label>
                <input
                    className='input-wrapper'
                    type="user-name"
                    id="user-name"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
        </div>
    );
};

export default EditUser;
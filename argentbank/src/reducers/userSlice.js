import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name:"user", 
  initialState:{
    user:{
    createdAt:"",
    email:"",
    firstName:"",
    id:"",
    lastName:"",
    updatedAt:"",
    userName:""
  },
    token:null,
  }, 
  reducers:{
    login: (state, action) => {
      state.token = action.payload; 
    }, 
    userProfile: (state, action) => {
      state.user = action.payload; 
    }, 
    updateUsername: (state, action) => {
      state.user.userName = action.payload; 
    }, 
    logout: (state) => {
      state.user = null; 
    }, 
  },
});

export const { login, logout, userProfile, updateUsername } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;

export const getUserProfile = () => async (dispatch, getState) => {
  const token = selectToken(getState());

  try {
    const config = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };
    const response = await fetch('http://localhost:3001/api/v1/user/profile', config);

    if (response.ok) {
      const responseData = await response.json();

      const userProfileData = responseData.body;
      dispatch(userProfile(userProfileData));
    } else {
      console.error('Erreur lors de la récupération du profil :', response.statusText);
    }
  } catch (error) {
    console.error('Erreur lors de la récupération du profil :', error);
  }
};

export default userSlice.reducer;

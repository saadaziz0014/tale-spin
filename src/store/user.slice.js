import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user") || {}
}

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1119738819.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:142135096.
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            // Suggested code may be subject to a license. Learn more: ~LicenseLog:2915554766.
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        removeUser: (state) => {
            state.user = {};
            // Suggested code may be subject to a license. Learn more: ~LicenseLog:2915554766.
            localStorage.removeItem("user");
        }
    }
})

export default userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
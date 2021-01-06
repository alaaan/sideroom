import React, { useState, useCallback } from "react";
import UserService from "../services/user_service";
import UserModel from "../models/user_model";

export const USER_DEFAULT_VALUE = {
    isAuthenticated: UserService.getInstance().isAuthenticated(),
    loggedInUser: UserService.getInstance().user,
    setLoggedInUser: ()=>{ },
    clearLoggedInUser: () => { },
}
export const UserContext = React.createContext(USER_DEFAULT_VALUE);

export const useUser = () => {
    const isAuthed = UserService.getInstance().isAuthenticated();
    const [isAuthenticated, setIsAuthenticated] = useState(isAuthed);

    const [user, setUser] = useState(UserService.getInstance().user);
    const setLoggedInUser = useCallback((user) =>{
        setUser(user);
        UserService.getInstance().persistNewUser(user);
        setIsAuthenticated(true);
    },[]);

    const clearLoggedInUser = useCallback(() =>{
        setLoggedInUser(new UserModel());
        UserService.getInstance().clearUser();
        setIsAuthenticated(false);
    },[]);

    return {
        isAuthenticated,
        loggedInUser: user,
        setLoggedInUser,
        clearLoggedInUser,
    };
};

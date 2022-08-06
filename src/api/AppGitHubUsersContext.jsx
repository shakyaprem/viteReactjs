import React, { useContext, useEffect, useReducer }from 'react';
import GitResource from './GitResource';

let GIT = "https://api.github.com/users";

const initialState = {
    loading: true,
    githubUser: [],
}

const AppGitHubUsersContext = React.createContext();

const AppGitHubUsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GitResource, initialState);
    
    const fetchGitApi = async (url) => {
        try {
            const github = await fetch(url);
            const githubUser = await github.json();
            console.log(githubUser);
            dispatch({
                type: "GET_USERS",
                payload: {
                    githubUser: githubUser,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        fetchGitApi(GIT);
    }, []);

    return (
        <AppGitHubUsersContext.Provider value={{ ...state, }}>
            { children }
        </AppGitHubUsersContext.Provider>
    );
};

const useAppGitHubUsersContext = () => {
    return useContext(AppGitHubUsersContext);
}

export { AppGitHubUsersContext, AppGitHubUsersProvider, useAppGitHubUsersContext }
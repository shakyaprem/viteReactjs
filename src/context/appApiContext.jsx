import React, { useContext, useReducer, useEffect } from "react";
import apiReducer from "./apiReducer";

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    loading: true,
    query: "",
    nbPages: 0,
    page: 0,
    hits: [],
};


const AppApiContext = React.createContext();

const AppApiProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(apiReducer, initialState);

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({
                type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                },
            });
        } catch (error) {
            console.log(error);
        }
    };

    const removePost = (post_ID) => {
        dispatch({
            type: "REMOVE_POST",
            payload: post_ID,
        });
    };

    const searchPost = (searchQuery) => {
        dispatch({
            type: "SEARCH_POST",
            payload: searchQuery,
        });
    };

    const nextPage = () => {
        dispatch({
            type: "NEXT_PAGE",
        });
    };
    const prevPage = () => {
        dispatch({
            type: "PREV_PAGE",
        });
    };
    
    useEffect(() => {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);

    return (
        <AppApiContext.Provider value={{ ...state, removePost, searchPost, nextPage, prevPage }}>
            {children}
        </AppApiContext.Provider>
    );
};


const useApiGlobalContext = () => {
    return useContext(AppApiContext);
};

export { AppApiContext, AppApiProvider, useApiGlobalContext };

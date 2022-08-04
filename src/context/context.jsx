import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";


const AppContext = React.createContext();

const API = "https://shakyademoapi.herokuapp.com/service";


const initialState = {
  loading: true,
  name: "",
  image: "",
  background: "",
  services: [],
};

const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME__UPDATE",
      payload: {
        name: "technical shakya",
        image: "./images/hero-image.png",
        background: "#fff",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT__UPDATE",
      payload: {
        name: "prem shakya",
        image: "./images/about-image.png",
      },
    });
  };
  
  const updateContactPage = () => {
    return dispatch({
      type: "UPDATE__CONTACT",
    });
  }
  const getServices = async (url) => {
    try {
      const service = await fetch(url);
      const serviceData = await service.json();
      dispatch({ 
        type: "GET_SERVICES", 
        payload: serviceData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage, updateContactPage }}>
      {children}
    </AppContext.Provider>
  );
};


const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

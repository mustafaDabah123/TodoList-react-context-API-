import React , {createContext  , useReducer , useEffect } from 'react';
import AppReducer from '../reducers/AppReducer';

// initial state 

const initialState = {
    // items:[
    //     {id:1 , text:'javeScrpt'}
    // ]
    items:JSON.parse(localStorage.getItem("items")) || []

}; 

export const itemsContext = createContext(initialState);

export const ItemsContextProvider = ({children}) => {
    const [state , dispatch ] = useReducer(AppReducer , initialState);
    // localStorage 

    useEffect(() => {
        localStorage.setItem("items" , JSON.stringify(state.items))
    })

    // actions 
    function addItems (items) {
        dispatch({
            type:"ADD_ITEM",
            payload:items
        })
    }

    function deleteItem (id) {
        dispatch({
            type:"DELETE_ITEM",
            payload:id
        })
    }

    return (
        <itemsContext.Provider value={{addItems  , items:state.items , deleteItem }}>
            {children}
        </itemsContext.Provider>
    )
}
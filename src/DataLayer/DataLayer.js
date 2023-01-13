import React, {createContext, useReducer, useContext} from "react";

//create 
export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, children}) =>(
    <DataLayerContext.Provider value ={useReducer( reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
)



//use
export const useDataLayerValue = () => useContext(DataLayerContext);
import React, { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transaction: [],
};

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState,
    () => {
      const localData = localStorage.getItem("transaction");
      return localData ? JSON.parse(localData) : initialState
    });

    useEffect(() => {
      localStorage.setItem("transaction", JSON.stringify(state));
    }, [state]);

  const addTransaction = (transaction) =>
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });

    const deleteTransaction = (id) =>
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });

  return (
    <Context.Provider
      value={{ transaction: state.transaction, addTransaction, deleteTransaction }}
    >
      {children}
    </Context.Provider>
  );
};

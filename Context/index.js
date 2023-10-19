import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  Children,
} from "react";
import { ethers } from "ethers";
import {
  checkIfWalletConnected,
  connectWallet,
  connectingTOKENCONTRACT,
  getBalance,
  connectingTOKEN_SALE_CONTRACT,
} from "../Utils/index";

const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  const TOKEN_ICO = "TOKEN SALL DAPP";
  return (
    <StateContext.Provider value={{ TOKEN_ICO }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

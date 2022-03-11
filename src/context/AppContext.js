import useInitialState from "../hooks/useInitialState";

const { createContext } = require("react");

const appContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = useInitialState();
  const data = { ...initialState };
  return <appContext.Provider value={data}>{children}</appContext.Provider>;
};

export { AppProvider };
export default appContext;

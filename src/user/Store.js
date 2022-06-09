import React, {useState} from "react";

const infoState = "1";

export const Context = React.createContext();

const Store = ({ children }) => {
    const[stateInfo, setStateInfo] = useState(infoState);

    return (
        <Context.Provider value={[stateInfo, setStateInfo]}>{children}</Context.Provider>
    );
};

export default Store;
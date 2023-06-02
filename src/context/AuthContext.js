import { useContext, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children, value }) { // função que recebe o valor do context
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider> // retorna o valor do context
    );
}
export function UseAuthValue (){
    return useContext(AuthContext); 
}
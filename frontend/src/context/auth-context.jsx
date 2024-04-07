import { createContext, useContext } from "react";
export const AuthContext = createContext()

// authentication

export const AuthProvider = ({children}) => {

    const storeTokenInLS = ( token ) =>{
         return localStorage.setItem('token', token)
    }

    // logout 
    // const LogOutUser = () => {
       
    // }
    return <AuthContext.Provider value={{storeTokenInLS}} >
        {children}
    </AuthContext.Provider>

}

// delivery boy

export const useAuth = () =>{
return useContext(AuthContext)
}
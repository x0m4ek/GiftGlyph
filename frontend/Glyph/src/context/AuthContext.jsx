import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import Loader from "../components/loader/Loader";



const AuthContext = createContext({
    user: null,
    loading: true
});
const LoadingContext = createContext({
  loading:false,

})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstLoadEnded, setFirstLoadEnded] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUser({
      name: "Test",
      role: "teacher",
      email: "dimasemchuk584@gmail.com"
    });
    setLoading(true)
    // setTimeout(()=> {

    // },2000)
         setLoading(false)
      setFirstLoadEnded(false);
    setIsAuthenticated(true);
  }, []);

  const register = async (name,email,password,role) => {
    try {
      setLoading(true)
 
      
    } catch (error) {
      setLoading(false)
      throw error
  
    
    }
    finally {
      setLoading(false)
    }
  }
  const contextValue = useMemo(() => ({ user, isAuthenticated, register}), [user, isAuthenticated]);
  const contextLoading = useMemo(() => ({ loading, setLoading,}), [loading]);
  return (
    <LoadingContext.Provider value={contextLoading}>
      <AuthContext.Provider value={contextValue}>
      {firstLoadEnded ? <Loader /> : children}
      </AuthContext.Provider>
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within Provider");
  }
  return context;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within Provider");
  }
  return context;
}
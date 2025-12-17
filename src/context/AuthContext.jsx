import { createContext, useContext, useState } from "react";
import { users } from "../data/user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const login = (username, password) => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );
    
    if (foundUser) {
      setUser({
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role
      });
      setError("");
      return true;
    } else {
      setError("Kullanıcı adı veya şifre hatalı!");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setError("");
  };

  const clearError = () => {
    setError("");
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout, clearError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

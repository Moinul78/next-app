"use client";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export default function Context({ children }) {
  const [user, setUser] = useState({ name: "Rahamat Ali", email: "rahmat@coredevs.ltd" });

  const updateUser = () => {
    setUser({ name: "Moinul Islam", email: "moinul@coredevs.ltd" })
  }

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useGlobalContext = () => useContext(AuthContext);
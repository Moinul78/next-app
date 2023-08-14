"use client";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export default function Context({ children }) {
  const [user, setUser] = useState({ name: "Rahamat Ali", email: "rahmat@coredevs.ltd" });

  const updateUser = () => {
    setUser({ name: "Moinul Islam", email: "moinul@coredevs.ltd" })
  }

  async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return await res.json()
  }


  return (
    <AuthContext.Provider value={{ user, updateUser, getData }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useGlobalContext = () => useContext(AuthContext);
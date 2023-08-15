"use client";
import AuthProvider from '../context/AuthProvider';
import GlobalProvider from '../context/GlobalProvider';

export default function Context({ children }) {
  return (
    <AuthProvider>
      <GlobalProvider>
        {children}
      </GlobalProvider>
    </AuthProvider>
  );
}

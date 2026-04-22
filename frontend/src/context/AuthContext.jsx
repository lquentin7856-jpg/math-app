import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('mathmaster_token'));
  const [user, setUser] = useState(() => {
    const value = localStorage.getItem('mathmaster_user');
    return value ? JSON.parse(value) : null;
  });

  const login = (payload) => {
    localStorage.setItem('mathmaster_token', payload.token);
    localStorage.setItem('mathmaster_user', JSON.stringify(payload.user));
    setToken(payload.token);
    setUser(payload.user);
  };

  const logout = () => {
    localStorage.removeItem('mathmaster_token');
    localStorage.removeItem('mathmaster_user');
    setToken(null);
    setUser(null);
  };

  const value = useMemo(() => ({ token, user, login, logout }), [token, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

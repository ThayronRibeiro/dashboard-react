import { createContext, useState, useEffect } from "react";

type ProviderProps = {
  children?: any;
  value?: any;
  Provider?: any;
};
export const AuthContext: ProviderProps = createContext({});

const [user, setUser] = useState();

useEffect(() => {
  const userToken = localStorage.getItem("user_token");
  const usersStorage = localStorage.getItem("users_db");

  if (userToken && usersStorage) {
    const hasUser = JSON.parse(usersStorage)?.filter(
      (user: any) => user.email === JSON.parse(userToken).email
    );

    if (hasUser) setUser(hasUser[0]);
  }
}, [user]);

export const AuthProvider = ({ children }: any) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

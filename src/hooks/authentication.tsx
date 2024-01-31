import AsyncStorage from '@react-native-async-storage/async-storage';
import {ReactNode, createContext, useContext, useEffect, useState} from 'react';

import {UserDTO} from '../dtos/user';

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  setUser: Function;
  user: UserDTO | null;
}

const AuthContext = createContext({} as IAuthContext);

function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<UserDTO | null>(null);

  const user_key = "user_info";

  useEffect(() => {
    async function initialize() {
      const user_info = await AsyncStorage.getItem(user_key);

      if (user_info) {
        const user_info_json = JSON.parse(user_info) as UserDTO;
        setUser(user_info_json);
      }
    }

    initialize();
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export {AuthProvider, useAuth};

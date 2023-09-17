import {createContext, useContext, useEffect, useState} from 'react';
import {LoginRequest} from '../models/Account';
import {AccountService} from '../service/Account';
import {readTokenFromStorage, removeTokenFromStorage} from '../helpers/storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../route';
import {IUser} from '../models/User';

type Role = 'Member' | 'Admin';

interface AuthProviderContext {
  role: Role | null;
  login: (creds: LoginRequest) => Promise<void>;
  logout: () => void;
  loginErrorMessage: string | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  user: IUser | null;
  token: string | null;
}

const AuthContext = createContext<AuthProviderContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a useAuthProvider');
  }
  return context;
};

const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [role, setRole] = useState<Role | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(
    null,
  );

  const loginMutation = AccountService.UseLoginRequest();
  const login = async (credentials: LoginRequest) => {
    try {
      const response = await loginMutation.mutateAsync(credentials);
      setRole(response.user.userRole);
      setLoginErrorMessage(null);
    } catch (error: any) {
      setLoginErrorMessage(error?.response?.data?.status?.message as string);
      console.log(error);
    }
  };
  const logout = () => {
    console.log('LOGOUT TRIGGERED');
    setRole(null);
    setUser(null);
    setToken(null);
    removeTokenFromStorage('TOKEN');
    removeTokenFromStorage('USER');
    navigate.navigate('Login');
  };

  useEffect(() => {
    readTokenFromStorage('TOKEN').then(value => {
      if (value) setToken(value);
    });
    readTokenFromStorage('USER').then((value: any) => {
      let parsedToken: IUser = JSON.parse(value);
      if (parsedToken) {
        setUser(parsedToken);
        setRole(parsedToken.userRole);
      }
    });
    if (token === null || token == '') {
      setTimeout(() => {
        navigate.navigate('Login');
      }, 3000);
    }
    if (token && token !== '')
      setTimeout(() => {
        navigate.navigate('Home');
      }, 3000);
  }, [loginMutation.data, token]);

  const isLoading = loginMutation.isLoading;
  const isError = loginMutation.isError;
  const isSuccess = loginMutation.isSuccess;

  return (
    <AuthContext.Provider
      value={{
        isError,
        isLoading,
        isSuccess,
        login,
        loginErrorMessage,
        logout,
        role,
        user,
        token,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

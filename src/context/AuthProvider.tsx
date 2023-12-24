import {createContext, useContext, useEffect, useState} from 'react';
import {LoginRequest} from '../models/Login';
import {AccountService} from '../service/Account';
import {readTokenFromStorage, removeTokenFromStorage} from '../helpers/storage';

type Role = 'Member' | 'Admin';

interface AuthProviderContext {
  role: Role | null;
  login: (creds: LoginRequest) => Promise<void>;
  logout: () => void;
  register: () => void;
  authState: {token: string | null; authenticated: boolean | null};
  loginErrorMessage: string | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
}

const AuthContext = createContext<AuthProviderContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a DashboardProvider');
  }
  return context;
};

const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    authenticated: null,
    token: null,
  });
  const [role, setRole] = useState<Role | null>(null);
  const [loginErrorMessage, setLoginErrorMessage] = useState<string | null>(
    null,
  );
  const loginMutation = AccountService.UseLoginRequest();
  const login = async (credentials: LoginRequest) => {
    try {
      const response = await loginMutation.mutateAsync(credentials);
      setAuthState({token: response.jwt, authenticated: true});
      setRole(response.user.userRole);
      setLoginErrorMessage(null);
    } catch (error: any) {
      setLoginErrorMessage(error?.response?.data?.status?.message as string);
      console.log(error);
    }
  };
  const register = () => {};
  const logout = () => {
    setRole(null);
    setAuthState({token: null, authenticated: null});
    removeTokenFromStorage('TOKEN');
    removeTokenFromStorage('USER');
    // PUSH TO LOGIN
  };

  useEffect(() => {
    // if (readTokenFromStorage('TOKEN') === null) {
    //   // PUSH TO LOGIN
    // }
  }, [loginMutation.data]);

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
        register,
        authState,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

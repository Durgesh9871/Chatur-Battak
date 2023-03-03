import React from "react";
interface AuthContextType {
  authState:any;
  login:any;
  logout:any;
  handleProdId:any
}

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);

function AuthContextProvider({ children }: any) {
  interface State {
    ProdId: string;
    isAuth: Boolean;
    token: string;
    Name: string;
    email: string;
  }
  const [state, setState] = React.useState<State>({
    isAuth: false,
    token: "",
    Name: "",
    email: "",
    ProdId: "",
  });
  const login = (token: string, Name: string, email: string) => {
    setState({
      ...state,
      isAuth: true,
      token,
      Name,
      email,
    });
  };
  const handleProdId = (id: string): void => {
    setState({
      ...state,
      ProdId: id,
    });
  };
  const logout = () => {
    setState({
      ...state,
      isAuth: false,
      token: "",
      Name: "",
      email: "",
    });
  };
  return (
    <AuthContext.Provider
      value={{ authState: state, login, logout, handleProdId }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

import React from "react";
interface AuthContextType {
  authState:any;
  login:any;
  logout:any;
  EnterGame:any
}

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);

function AuthContextProvider({ children }: any) {
  interface State {
    userId: string;
    isAuth: Boolean;
    token: string;
    Name: string;
    email: string;
    id:string,
    gameId:string;
  }
  const [state, setState] = React.useState<State>({
    isAuth: false,
    token: "",
    Name: "",
    email: "",
    userId: "",
    id:"",
    gameId:"",
  });
  const login = (token: string, Name: string, email: string,id:string,userId:string) => {
    setState({
      ...state,
      isAuth: true,
      token,
      Name,
      email,
      id,
      userId
    });
  };
  const EnterGame=(gameId:string)=>{
    setState({...state,gameId})
  }
  const logout = () => {
    setState({
      ...state,
      isAuth: false,
      token: "",
      Name: "",
      email: "",
      id:"",
      gameId:""
    });
  };
  return (
    <AuthContext.Provider
      value={{ authState: state, login, logout, EnterGame}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

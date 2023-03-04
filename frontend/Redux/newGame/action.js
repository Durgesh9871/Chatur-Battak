import { POSTLOGIN,LOADING,POSTNEW, ERROR } from "./actiontype";

const init={
    name:localStorage.getItem("name") || "",
    id:localStorage.getItem("id") || "",
    gameId:localStorage.getItem("game") || "",
    token:localStorage.getItem("token") || "",
    loading:false,
    error:false
}

const authReducer=(state=init,{type,payload})=>{
    switch (type){
        case LOADING:{
            return {...state,error:false}
        }
        case POSTLOGIN:{
            localStorage.setItem("name",payload.name)
            localStorage.setItem("id",payload.id)
            localStorage.setItem("token",payload.token)
            return {...state,name:payload.name,id:payload.id,token:payload.token}
        }
        case POSTNEW:{
            localStorage.setItem("game",payload.id)
            return {...state,gameId:payload.id}
        }
        default:{
            return state
        }
    }
}
import { createContext, useReducer, useEffect } from 'react';
import { signup, login, logout, getUser } from '../Services/authapi';

const AuthContext = createContext();

const backendURI = import.meta.env.VITE_BACKEND_URI;

function reducer(state, action) {
    switch (action.type) {
        case "setUser":
            return { ...state, user: action.user }
        case "setLoading":
            return { ...state, loading: action.load }
        case "setAuthenticated":
            return { ...state, isAuthenticated: action.authenticate }
        default:
            return state;
    }
}

export const AuthProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, { user: "", loading: true, isAuthenticated: false });
    useEffect(() => {
        const invokeCall = async () => {
            const token = await getUser();
            if ("user" in token) {
                dispatch({ type: "setUser", user: token.user });
                dispatch({ type: "setLoading", load: false });
                dispatch({ type: "setAuthenticated", authenticate: true });
            }
        }
        invokeCall();
    }, []);

    const signin = async (email, password) => {
        try {

            const res = await login(email, password);

            if (res.message) {
                dispatch({ type: "setUser", user: res.user });
                dispatch({ type: "setLoading", load: false });
                dispatch({ type: "setAuthenticated", authenticate: true });
            } else {
                dispatch({ type: "setUser", user: "" });
                dispatch({ type: "setLoading", load: true });
                dispatch({ type: "setAuthenticated", authenticate: false });
            }
            return res.json();
        } catch (err) {
            return { error: err.message }
        }
    }

    const signUp = async (username, email, password) => {
        try {
            const res = await signup(username, email, password);
            if (res.message) {
                dispatch({ type: "setUser", user: res.user });
                dispatch({ type: "setLoading", load: false });
                dispatch({ type: "setAuthenticated", authenticate: true });
            }else{
                dispatch({type:"setUser",user:""});
                dispatch({type:"setLoading",load:true});
                dispatch({type:"setAuthenticated",authenticate:false});
            }
            return res.json();
        } catch (err) {
            return { error: err.message }
        }
    }

    const gLogin = async (code)=>{
        try{
            const res = await fetch(`${backendURI}/auth/google`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({code})
            });
            const data = await res.json();
            if(data.message){
                dispatch({type:"setUser",user:data.user});
                dispatch({type:"setLoading",load:true});
                dispatch({type:"setAuthenticated",authenticate:true});
            }else{
                dispatch({type:"setUser",user:""});
                dispatch({type:"setLoading",load:true});
                dispatch({type:"setAuthenticated",authenticate: false});
            }
            return data;
        }catch(err){
            console.error(err);
            return {error:err.message}
        }
    }
    const signout = async () => {
        try {
            const res = await logout();
            dispatch({ type: "setUser", user: "" });
            dispatch({ type: "setLoading", load: true });
            dispatch({ type: "setAuthenticated", authenticate: false });
        } catch (err) {
            return { error: err.message }
        }
    }

    return (
        <AuthContext.Provider value={{ state, signin, signUp, signout , gLogin }} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

const BACKEND_URI = import.meta.VITE_BACKEND_URI;

const signup = async (username, email, password) => {
    try {
        const res = await fetch(`${BACKEND_URI}/auth/signup`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: username, email: email, password: password })
        });
        return res.json();
    } catch (err) {
        console.error(err);
        return { error: err.message }
    }
}

const login = async (email, password) => {
    try {
        const res = await fetch(`${BACKEND_URI}/auth/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: email, password: password })
        });
        return res.json();
    } catch (err) {
        console.error(err);
        return { error: err.message }
    }
}

const logout = async () => {
    try {
        const res = await fetch(`${BACKEND_URI}/auth/logout`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        }
        );
        return res.json();
    } catch (err) {
        console.error(err);
        return { error: err.message }
    }
}

const getUser = async()=>{
    try{
        const res = await fetch(`${BACKEND_URI}/auth/protected`,{
            method:"GET",
            credentials:"include"
        });
        return res.json();
    }catch(err){
        console.error(err);
        return {error:err.message}
    }
}

export {signup,login,logout,getUser}

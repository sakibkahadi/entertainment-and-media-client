import { createContext,  } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    
    

   
    const googleLogIn = ()=>{
       return signInWithPopup(auth, provider)
    }
    
    const  createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo ={ createUser, googleLogIn}
    return (
        <AuthContext.Provider state={true} value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
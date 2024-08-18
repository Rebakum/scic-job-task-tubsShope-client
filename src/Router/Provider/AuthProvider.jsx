import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../firebaseConfig";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] =useState(true);
    console.log(user)



//-----creat User-------
const createUser =(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)

}
//--------sigIn User-------
const sigInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

// -----------google Login-------
const googleLogIn =() =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
}

 //-----------logOut---------
 const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}
    const authInfo = {
        user,
        loading,
        createUser,
        sigInUser,
        googleLogIn,
        logOut

    }
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;
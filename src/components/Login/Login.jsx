import { signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { useState } from "react";
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
    const [user, setUser] = useState(null);


    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider,)
            .then((result) => {
                setUser(result.user)
            })
            .catch(error => {
                console.log('some error: ', error);
                setUser(null)
            })
    }


    const handleGithubSingIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                console.log('some-error: ', error);
            })
    }


    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out done');
                setUser(null)
            })
            .catch(error => {
                console.log('some error : ', error);
            })
    }



    return (
        <div>


            {
                user ?
                    <button className="btn btn-error" onClick={handleSignOut}>Sign Out</button> :
                    <>
                        <button className="btn btn-primary" onClick={handleGoogleSignIn}>Login with Google</button>
                        <button onClick={handleGithubSingIn} className="btn btn-secondary">Login with github</button>
                    </>
            }
            {user && <div>
                <h4>{user.displayName}</h4>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;
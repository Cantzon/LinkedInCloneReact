import React, {useState} from 'react';
import './Login.css';
import {auth} from "./firebase";
import {useDispatch} from "react-redux";
import {login} from "./features/userSlice";

function Login() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [profilePicUrl, setProfilePicUrl] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoUrl: userAuth.user.photoURL,
                    }))
                )
            }).catch(error => alert(error));
    };
    const register = () => {
        if (!name || !email || !password) {
            return alert("Please enter valid details!")
        }

        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePicUrl
                })
                    .then(() => {
                        dispatch(login({
                            email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: name,
                            photoUrl: profilePicUrl
                        }))
                    })
            }
        ).catch(error => alert(error));
    };

    return (
        <div className="login">
            <img
                src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks"
                alt=""
            />

            <form>
                <input type="text"
                       value={name}
                       onChange={(e => setName(e.target.value))}
                       placeholder="Full Name (required if registering)"
                />
                <input type="text"
                       value={profilePicUrl}
                       onChange={(e => setProfilePicUrl(e.target.value))}
                       placeholder="Profile Pic URL (optional)"
                />
                <input type="text"
                       value={email}
                       onChange={(e => setEmail(e.target.value))}
                       placeholder="Email"
                />
                <input type="password"
                       value={password}
                       onChange={(e => setPassword(e.target.value))}
                       placeholder="Password"
                />
                <button type="submit" onClick={loginToApp}> Sign In</button>
            </form>

            <p>
                Not a member? {" "}
                <span className="login__register" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    );
}

export default Login;
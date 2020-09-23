import React, { useState } from "react";
import "./NavBar.scss";
import { Firebase } from "../Firebase/firebase";
import PropTypes from "prop-types";


export default function NavBar(props: {
    firebase: Firebase
}) {
    const [userState, setUserState] = useState({
        isLogged: false,
        displayName: "",
    })

    function login() {
        props.firebase.loginWithGoogle().then((userInfo: any) => {
            setUserState({
                isLogged: true,
                displayName: userInfo.displayName
            })
        });
    }
    function logout() {
        props.firebase.logOut().then(() => {
            setUserState({
                isLogged: false,
                displayName: ""
            })
        });
    }

    return (
        <div className="nav-container">
            <h1>Card Repository</h1>
            <div className="options">
                <a onClick={!userState.isLogged ? login : undefined}>{userState.isLogged ? userState.displayName : "Login"}</a>
                {
                    userState.isLogged && <a onClick={logout}>Logout</a>
                }
            </div>
        </div>
    )
}

NavBar.propTypes = {
    firebase: PropTypes.instanceOf(Firebase),
};
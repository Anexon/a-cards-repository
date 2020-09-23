import React from "react";
import "./NavBar.scss";
import { Firebase } from "../Firebase";
import PropTypes from "prop-types";


export default function NavBar(props: {
    firebase: Firebase
}) {

    function login() {
        props.firebase.loginWithGoogle();
    }

    return (
        <div className="nav-container">
            <h1>Card Repository</h1>
            <button onClick={login}>Login</button>
        </div>
    )
}

NavBar.propTypes = {
    firebase: PropTypes.instanceOf(Firebase),
};
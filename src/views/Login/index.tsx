import React from "react";
import LoginForm from "../../components/LoginForm";
import "./index.css"

//FC function
const Login: React.FC = () => {
    return (
        <div className="login-page">
            <LoginForm></LoginForm>
        </div>
    )
}
export default Login

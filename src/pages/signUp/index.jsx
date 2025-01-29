import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './index.css';

function SignUp() {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate(); // Initialize navigate functio

    const handleSubmit = (e) => {
        e.preventDefault(); 

        navigate("/login ");
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}> 
                    <input type="text" placeholder="username" required className="input-field" value={username} 
                    onChange={(e) => setUsername(e.target.value)} // Handle input changes
                    />
                    <input type="password" placeholder="Password" required className="input-field" value={password}
                    onChange={(e) => setPassword(e.target.value)} // Handle input changes
                    />

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;

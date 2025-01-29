import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './index.css'; 

function LogIn() {
    const [username, setUsername] = useState(""); // State to handle username
    const [password, setPassword] = useState(""); // State to handle password
    const navigate = useNavigate(); // Initialize navigate function

    const handleSubmit = (e) => {
        e.preventDefault(); 
        navigate("/home"); 
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}> 
                    <input type="text" placeholder="Username" required className="input-field"value={username}
                        onChange={(e) => setUsername(e.target.value)} // Handle input changes
                    />
                    <input type="password" placeholder="Password" required className="input-field" value={password}
                        onChange={(e) => setPassword(e.target.value)} // Handle input changes
                    />
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
                {/* Link to Sign Up */}
                <div className="signup-link">
                    <p>
                        Don't have an account? <a href="/signup" className="signup-btn">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LogIn;

import React, { useState } from "react";
import { BsFillArchiveFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";  // useNavigate for redirection
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart,Line,
} from "recharts";
import './index.css';

function Home() {
    const [text, setText] = useState(null);
    const [darkMode, setDarkMode] = useState(false); 
    const navigate = useNavigate(); 

    // Sample Data
    const data = [
        { name: "Products", uv: 4000, pv: 2400, amt: 2400 },
        { name: "Categories", uv: 3000, pv: 1398, amt: 2210 },
        { name: "Customers", uv: 2000, pv: 9800, amt: 2290 },
        { name: "Alerts", uv: 2780, pv: 3908, amt: 2000 },
    ];

    // Handle data selection 
    function handleData(data) {
        setText(data);
    }

    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    
    const handleLogout = () => {
        navigate("/login"); 
    };

    return (
        <main className={`main-container ${darkMode ? "dark-mode" : ""}`}>
            
            <div className="top-nav">
                <button className="toggle-btn" onClick={toggleDarkMode}>
                🌙 / ☀️
                </button>
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>

        
            <div className="main-title">
                <h3>DASHBOARD</h3>
            </div>

            {/* Dashboard Cards */}
            <div className="main-cards">
                {["Products", "Categories", "Customers", "Alerts"].map((card, index) => (
                    <div className="card" key={index}>
                        <div className="card-inner">
                            <h3>{card.toUpperCase()}</h3>
                            <BsFillArchiveFill className="icard-con" />
                        </div>
                        <h1>{data[index]?.pv || 0}</h1>
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="charts">
                {/* Bar Chart */}
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        onClick={(e) => handleData(e.activePayload?.[0]?.payload)}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                {/* Line Chart */}
                <ResponsiveContainer className="responsive-container" width="100%" height={300}>
                    <LineChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        onClick={(e) => handleData(e.activePayload?.[0]?.payload)}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>

            </div>

            {/* Selected Data Display */}
            {text && (
                <div className="model">
                    <h3>Selected Data</h3>
                    <p>{JSON.stringify(text, null, 2)}</p>
                </div>
            )}
        </main>
    );
}

export default Home;

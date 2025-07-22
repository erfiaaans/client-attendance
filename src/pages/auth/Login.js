import React, { useState } from "react";
import axios from "axios";
import hpImage from '../../assets/img/hp.jpg';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/login", {
                email,
                password,
            });
            localStorage.setItem("token", response.data.token);
            setSuccess("Login successful!");
            setError("");
        } catch (err) {
            setError("Login failed. Please check your credentials.");
            setSuccess("");
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <div className="card shadow-lg w-100" style={{ maxWidth: "1500px" }}>
                <div className="row g-0">
                    {/* Left Image */}
                    <div className="col-md-6 d-none d-md-block">
                        <img
                            src={hpImage}
                            alt="Welcome"
                            className="img-fluid h-100 w-100"
                            style={{
                                objectFit: "cover",
                                borderTopLeftRadius: "0.5rem",
                                borderBottomLeftRadius: "0.5rem",
                            }}
                        />
                    </div>

                    {/* Right Login Form */}
                    <div className="col-md-6 p-5">
                        <div className="text-center mb-4">
                            {/* Logo */}
                            <svg
                                width="40"
                                viewBox="0 0 25 42"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                            >
                                <path d="M13.79,0.36 L3.4,7.44..." />
                            </svg>
                            {/* <h1 className="fw-bold mt-1">Attendguard</h1> */}
                        </div>

                        <h1 className="mb-1">Welcome Back 👋</h1>
                        <h5 className="mb-3 text-muted">Please sign-in to your account!</h5>

                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email or Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email or username"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <div className="input-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="************"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <span className="input-group-text">
                                        <i className="bx bx-hide"></i>
                                    </span>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

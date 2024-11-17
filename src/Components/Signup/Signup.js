import React, { useState } from "react";

function SignUp({ toggle }) {
  const [username, setUsername] = useState("");
  const [name, setName] = useState(""); // Added name state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Sign up with:",
      name,
      username,
      email,
      password,
      confirmPassword
    );
  };

  return (
    <div className="form-wrapper align-items-center">
      <div className="form sign-up">
        {/* Name Input */}
        <div className="input-group">
          <i className="bx bxs-user"></i>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Username Input */}
        <div className="input-group">
          <i className="bx bxs-user"></i>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        {/* Email Input */}
        <div className="input-group">
          <i className="bx bx-mail-send"></i>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Password Input */}
        <div className="input-group">
          <i className="bx bxs-lock-alt"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* Confirm Password Input */}
        <div className="input-group">
          <i className="bx bxs-lock-alt"></i>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Sign up</button>
        <p>
          <span>Already have an account?</span>
          <b onClick={toggle} className="pointer">
            Sign in here
          </b>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

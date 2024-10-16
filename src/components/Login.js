import React from "react";
import "./../styles/Login.css"; 

const Login = () => {
  return (
    <section className="login-section" id="login">
      <h2>Login</h2>
      <form className="login-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="input-group">
          <label htmlFor="Register Number">Register Number</label>
          <input type="RegisterNum" id="RegisterNum" name="RegisterNum" placeholder="RA" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">College Mail</label>
          <input type="email" id="email" name="email" placeholder="@srmist.edu.in" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <div className="input-group">
          <label htmlFor="domain">Domain</label>
          <select id="domain" name="domain" required>
            <option value="">Select Domain</option>
            <option value="technical">Technical</option>
            <option value="creatives">Creatives</option>
            <option value="events">Events</option>
            <option value="business">Business</option>
          </select>
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </section>
  );
};

export default Login;





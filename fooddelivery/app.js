import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  const goLogin = () => {
    setPage("login");
    setTimeout(() => {
      document.getElementById("login")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const openSignup = () => {
    setPage("signup");
    setTimeout(() => {
      document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const openLogin = () => {
    setPage("login");
    setTimeout(() => {
      document.getElementById("login")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const login = () => {
    const u = document.getElementById("luser").value.trim();
    const p = document.getElementById("lpass").value.trim();
    const c = document.getElementById("loginCard");
    if (u === "" || p === "") {
      c.classList.add("shake");
      setTimeout(() => c.classList.remove("shake"), 300);
      return;
    }
    alert("Login Successful");
  };

  const signup = () => {
    const n = document.getElementById("name").value.trim();
    const e = document.getElementById("email").value.trim();
    const c = document.getElementById("contact").value.trim();
    const p = document.getElementById("spass").value.trim();
    const cp = document.getElementById("cpass").value.trim();
    const card = document.getElementById("signupCard");

    if (n === "" || e === "" || c === "" || p === "" || cp === "") {
      card.classList.add("shake");
      setTimeout(() => card.classList.remove("shake"), 300);
      return;
    }
    if (p !== cp) {
      alert("Password doesn't match");
      return;
    }
    alert("Account Created Successfully");
    openLogin();
  };

  return (
    <div className="body">
      <img src="https://cdn-icons-png.flaticon.com/512/1046/1046869.png" className="food" alt="" />
      <img src="https://cdn-icons-png.flaticon.com/512/1046/1046854.png" className="food" alt="" />
      <img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" className="food" alt="" />
      <img src="https://cdn-icons-png.flaticon.com/512/1046/1046871.png" className="food" alt="" />

      <div className="page">
        <h1>Welcome to FoodApp</h1>
        <div className="arrow" onClick={goLogin}>⬇</div>
      </div>

      <div className="page" id="login">
        {page === "login" && (
          <div className="container" id="loginCard">
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" className="logo" alt="" />
            <h2>Login</h2>
            <div className="input-box">
              <input type="text" id="luser" placeholder="Email or Username" />
            </div>
            <div className="input-box">
              <input type="password" id="lpass" placeholder="Password" />
            </div>
            <button className="btn" onClick={login}>Login</button>
            <div className="link">
              <p>New here? <span onClick={openSignup}>Create Account</span></p>
            </div>
          </div>
        )}
      </div>

      <div className="page" id="signup">
        {page === "signup" && (
          <div className="container" id="signupCard">
            <img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" className="logo" alt="" />
            <h2>Create Account</h2>

            <div className="input-box">
              <input type="text" id="name" placeholder="Full Name" />
            </div>

            <div className="input-box">
              <input type="email" id="email" placeholder="Email" />
            </div>

            <div className="input-box">
              <input type="text" id="contact" placeholder="Contact Number" />
            </div>

            <div className="input-box">
              <input type="password" id="spass" placeholder="Password" />
            </div>

            <div className="input-box">
              <input type="password" id="cpass" placeholder="Confirm Password" />
            </div>

            <button className="btn" onClick={signup}>Create Account</button>

            <div className="link">
              <p>Already a user? <span onClick={openLogin}>Login</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

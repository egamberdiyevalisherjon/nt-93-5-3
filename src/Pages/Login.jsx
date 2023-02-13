import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // let token = localStorage.getItem("token");

  // console.log(token);

  // if (token) navigate("/");

  async function handleLogin(e) {
    e.preventDefault();
    let email = e.target[0].value;
    let password = e.target[1].value;

    let { token } = await fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => {
        alert("Something went wrong. Try again...");
        console.log(err);
      });

    localStorage.setItem("token", token);
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" id="email" placeholder="email" />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

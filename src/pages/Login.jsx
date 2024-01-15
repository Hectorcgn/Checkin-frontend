import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@material-tailwind/react";

function Login() {
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    loginFetch(event, navigate);
  };
  return (
    <section className="flex flex-col items-center h-screen justify-center">
      <div className="w-72 mb-4">
        <h2 className="text-3xl">Login</h2>
      </div>
      <form onSubmit={login}>
        <div className="w-72 mb-4">
          <Input label="username" />
        </div>
        <div className="w-72 mb-4">
          <Input label="password" />
        </div>
        <Button type="submit mb-4">Login</Button>
      </form>
      <div className="w-72 mt-4">
        <p className="text-sm">
          to register click{" "}
          <a href="/register" className="text-blue-500">
            here
          </a>
        </p>
      </div>
    </section>
  );
}

export default Login;

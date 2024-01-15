import React from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@material-tailwind/react";

function Register() {
  const navigate = useNavigate();
  const register = (event) => {
    event.preventDefault();
    registerFetch(event, navigate);
  };
  return (
    <section className="flex flex-col items-center h-screen justify-center">
      <div className="w-72 mb-4">
        <h2 className="text-3xl">Register</h2>
      </div>
      <form onSubmit={register}>
        <div className="w-72 mb-4">
          <Input label="username" />
        </div>
        <div className="w-72 mb-4">
          <Input label="firstname" />
        </div>
        <div className="w-72 mb-4">
          <Input label="lastname" />
        </div>
        <div className="w-72 mb-4">
          <Input label="email" />
        </div>
        <div className="w-72 mb-4">
          <Input label="password" />
        </div>
        <div className="w-72 mb-4">
          <Input label="Confirm Password" />
        </div>
        <Button type="submit" className="w-72 mb-4">
          Register
        </Button>
      </form>
      <div className="w-72 mt-4">
        <p className="text-sm">
          to login click{" "}
          <a href="/" className="text-blue-500">
            here
          </a>
        </p>
      </div>
    </section>
  );
}

export default Register;

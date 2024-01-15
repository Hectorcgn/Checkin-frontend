import React from "react";
import { Input, Button } from "@material-tailwind/react";

function Login() {
  return (
    <section className="flex flex-col items-center h-screen justify-center">
      <div className="w-72 mb-4">
        <h2 className="text-3xl">Login</h2>
      </div>
      <form>
        <div className="w-72 mb-4">
          <Input label="Username" />
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

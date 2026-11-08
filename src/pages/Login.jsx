import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const user = login(email, password);

    if (!user) {
      alert("Invalid Credentials!");
      console.log(user);

      return;
    }

    if (user.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/employee");
    }
  };

  return (
    <div
      id="login-container"
      className="flex items-center justify-center min-h-screen"
    >
      <div className=" h-72 w-80 border-2 border-green-600 rounded-3xl flex flex-col  p-4 mb-4">
        <h1 className="text-green-600 self-center p-1 font-extrabold text-2xl">
          Log In
        </h1>

        <form className="flex flex-col">
          <label htmlFor="email" className="text-green-600">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter email"
            className="w-full border-2 border-green-600 rounded-md p-1 mb-4 mt-2"
          />

          <label htmlFor="password" className="text-green-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter password"
            className="w-full border-2 border-green-600 rounded-md p-1 mb-4 mt-2"
          />
          <button
            id="submit"
            className="self-center text-slate-300 bg-green-600 rounded-4xl px-4 py-2 cursor-pointer"
            onClick={handleLogin}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

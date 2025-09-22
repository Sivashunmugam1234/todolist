import { useRef } from "react";
import apiClient from "../api";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate=useNavigate();

  const submit =async (e) => {
    e.preventDefault();
    let username= usernameRef.current.value;
    let password= passwordRef.current.value;
         const response = await apiClient.post('/auth/login', { username, password });
      const token = response.data.token;
      localStorage.setItem('authToken', token);
      navigate('/todolist')
    console.log("Username:", usernameRef.current.value);
    console.log("Password:", passwordRef.current.value);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Welcome Back
      </h1>
      <form onSubmit={submit}>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            ref={usernameRef}
            name="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

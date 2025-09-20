import { useState } from "react";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";

export default function AuthLayout() {
  const [isLogin, setIsLogin] = useState(true);
  
  const toggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-blue-50 relative">
      
      <div className="absolute top-4 right-4 flex items-center">
        <p className="text-gray-600 mx-2">
          {isLogin ? "Need an account?" : "Already have an account?"}
        </p>
        <button
          onClick={toggle}
          className="bg-white font-medium text-blue-600 py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition"
        >
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </div>

      <div className="flex w-full min-h-screen">
        
        <div className={`w-1/2 flex justify-center items-center ${isLogin?"transition duration-700 ease-in-out":""}`}>
        
          {isLogin ? <LoginPage />: <p></p>}
        </div>

        <div className="w-1/2 flex justify-center items-center">
          {!isLogin ? <SignUpPage /> : <p></p>}
        </div>
      </div>
    </div>
  );
}
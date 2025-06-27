import React from "react";
import { useNavigate } from "react-router-dom";
import founderImg from "../assets/founder.jpg";
import Header from "./Header";

function FounderProfile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      
      <Header />

     
      <div className="flex-1 flex items-center justify-center">
        <div className="flex w-4/5 h-[80%] shadow-lg rounded-lg overflow-hidden bg-white">
          <div
            className="w-1/2 bg-cover bg-center"
            style={{ backgroundImage: `url(${founderImg})` }}
          ></div>

          <div className="w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Rohit Chaudhary
            </h2>
            <p className="text-gray-600 mb-4">
              Web development student by day, Stack Overflow explorer by night.
              Currently building projects not just to learn — but to prove to my
              laptop that I do know what I'm doing. Obsessed with turning vague
              ideas into working apps (eventually).
            </p>
            <ul className="text-gray-700 mb-4">
              <li>
                <strong>Email:</strong> rohitskills86@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +91 8630827951
              </li>
              <li>
                <strong>Location:</strong> Greater Noida, India
              </li>
              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/Rohit-Chaudhary86"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rohit-Chaudhary86
                </a>
              </li>
            </ul>
            <button
              onClick={() => navigate("/")}
              className="mt-4 w-fit bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FounderProfile;

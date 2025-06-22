import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate=useNavigate();
  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center cursor-pointer"  onClick={()=>navigate('/')}>
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </div>

          <div className="flex items-center lg:order-2">
            <button
              onClick={() => navigate("/Login")}
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </button>
            <button
               onClick={() => navigate("/SignUp")}
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </button>
          </div>

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <button
                  onClick={()=>navigate('/')}
                   className="py-2 pr-4 pl-3 hover:text-orange-700 text-gray-700"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/AboutUs")}
                  className="py-2 pr-4 pl-3 hover:text-orange-700 text-gray-700"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/ContactUs")}
                  className="py-2 pr-4 pl-3 hover:text-orange-700 text-gray-700"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                 onClick={()=>navigate("/Founder")}
                 className="py-2 pr-4 pl-3 hover:text-orange-700 text-gray-700"
                >
                   Founder
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

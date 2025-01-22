import { Outlet } from "react-router-dom";

import { Navbar } from "../components";

const Main = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <Outlet />
    </>
  );
};

export default Main;

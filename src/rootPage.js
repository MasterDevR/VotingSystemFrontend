import { Outlet } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";
import Login from "./Components/pages/Login";
const RootPage = () => {
  return (
    <main className="displayFlex">
      <Nav />
      <main>
        <Outlet />
      </main>
    </main>
  );
};

export default RootPage;

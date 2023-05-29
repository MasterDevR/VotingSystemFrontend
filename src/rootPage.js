import { Outlet } from "react-router-dom";
import AdminNav from "./Components/Navbar/AdminNav";
import Student from "./Components/pages/student";
const RootPage = () => {
  const userType = localStorage.getItem("userType");
  const isAdmin = userType === "admin";

  return (
    <main className="displayFlex">
      {isAdmin ? (
        <>
          <AdminNav />
          <main>
            <Outlet />
          </main>
        </>
      ) : (
        <Student />
      )}
    </main>
  );
};

export default RootPage;

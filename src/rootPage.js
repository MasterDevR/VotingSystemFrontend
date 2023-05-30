import { Outlet, redirect, useLoaderData } from "react-router-dom";
import AdminNav from "./Components/Navbar/AdminNav";
import Student from "./Components/pages/student";
const RootPage = () => {
  const loader = useLoaderData();
  const userType = loader;
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

export const rootPageLoader = async () => {
  const userType = localStorage.getItem("userType");

  if (userType === null) {
    return redirect("/login");
  }
  return userType;
};

import { useAppDispatch, useAppShallowSelector } from "../hooks/hooks";

import Login from "../routes/Login/Login";
import { Main } from "../routes/Main/Main";
import Navbar from "../components/Navbar/Navbar";
import React from "react";
import { initializeUser } from "../store/slice/userSlice";

const App = ({ children }) => {
  const user = useAppShallowSelector(({ auth }) => auth.data);

  // return !user ? (
  //   <Login />
  // ) : (
  //   <>
  //     <Navbar />
  //     <Main>{children}</Main>
  //   </>
  // );

  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
};

const Layout = ({ children }) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(initializeUser());
  }, [dispatch]);

  return <App children={children} />;
};

export default Layout;

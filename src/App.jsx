import { useState } from "react";

import Header from "./componenets/Header";

import Footer from "./componenets/Footer";
import { Outlet } from "react-router-dom";

import userContext from "./utils/userContext";

import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "saurabh",
    email: "saurabh.patha52@gmail.com",
  });
  return (
    <Provider store={store}>
      <userContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};

export default AppLayout;

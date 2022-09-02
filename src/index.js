import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./routes/Home/Home";
import Layout from "./layout/Layout";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/jcchallenge" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Page Not Found</p>
                </main>
              }
            />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

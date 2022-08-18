import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Container from "./Container";
import MenuItems from "../config/RouteConfig";

const Application = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            {MenuItems.map((menuItem) => (
              <Route
                element={<Container content={menuItem.content} />}
                key={menuItem.title}
                path={menuItem.path}
              />
            ))}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Application;

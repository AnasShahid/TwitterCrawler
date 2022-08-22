import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../../global-styles";
import MenuItems from "../config/RouteConfig";
import Container from "../../../components/pages/Container";
import Navbar from "../../../components/header/Header";
import { Content, MainLayout } from "./style";

const MainContainer = () => {
  return (
    <MainLayout>
      <GlobalStyle />
      <Navbar />
      <Content>
        <Routes>
          {MenuItems.map((menuItem) => (
            <Route
              element={<Container content={menuItem.content} />}
              key={menuItem.title}
              path={menuItem.path}
            />
          ))}
        </Routes>
      </Content>
    </MainLayout>
  );
};

export default MainContainer;

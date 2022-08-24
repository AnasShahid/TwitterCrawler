import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../../global-styles";
import MenuItems from "../config/RouteConfig";
import Container from "../../../components/pages/Container";
import Navbar from "../../../components/header/AppBar";
import { Content, MainLayout } from "./style";
import SearchBar from "../../../components/search-bar/SearchBar";

const MainContainer = () => {
  return (
    <MainLayout>
      <GlobalStyle />
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Content>
          <div>
            <SearchBar />
          </div>
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
      </div>
    </MainLayout>
  );
};

export default MainContainer;

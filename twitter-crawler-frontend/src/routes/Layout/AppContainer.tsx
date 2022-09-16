import React from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../../global-styles";
import MenuItems from "../config";
import RouteContent from "./RouteContainer";
import Navbar from "../../components/common/header";
import { Content, MainLayout } from "./style";
import SearchBar from "../../components/common/search-bar";

const MainContainer: React.FC = () => {
  return (
    <MainLayout>
      <GlobalStyle />
      <Navbar />
      <Content>
        <SearchBar />
        <Routes>
          {MenuItems.map((menuItem) => (
            <Route
              element={<RouteContent content={menuItem.content} />}
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

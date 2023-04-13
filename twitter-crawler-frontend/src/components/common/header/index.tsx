import React from "react";
import MenuItems from "../../../routes/config";
import { Menu, MenuLink, Nav, NavbarContainer, Heading } from "./style";

const Navbar: React.FC = () => {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <Heading>Tweeter Crawler</Heading>
          <Menu>
            {MenuItems.map((menuItem) => (
              <MenuLink key={menuItem.title} to={menuItem.path}>
                {menuItem.title + " "}
              </MenuLink>
            ))}
          </Menu>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;

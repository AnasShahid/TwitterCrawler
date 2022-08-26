import { Container } from "../../global-styles";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Twitter } from "@styled-icons/boxicons-logos/Twitter";

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 80px;
  background-color: #1da1f2;
  /* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container};
`;

export const NavLogo = styled.a`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 2.5rem;
  font-weight: 800;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.08);
  }
`;

// export const NavIcon = styled(BiRestaurant)`
// margin-right: .8rem;
// transition: all .5s ease;

// &:hover {
//     transform: scale(2);
// }
// `;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
  }
`;
export const Heading = styled.h1`
  color: white;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  width: 35%;

  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: "0";
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  cursor: pointer;
  height: 100%;
  transition: all 0.2s ease;

  &:hover {
    color: #550a35;
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: #550a35;
  }

  @media only screen and (max-width: 1000px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;

export const MenuItemBtn = styled.li`
  list-style: none;
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
  }
`;

export const MenuLinkBtn = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

// export const TwitterIcon = styled(Twitter)`
//   width: 50px;
//   fill: white;
// `;

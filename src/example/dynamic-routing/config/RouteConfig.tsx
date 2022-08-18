import React from "react";
import { Route } from "../interfaces/Route";
import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";

const MenuItems: Array<Route> = [
  { path: "/", title: "Home", content: <Home /> },
  {
    path: "/contact",
    title: "Contact",
    content: <Contact email="haris@nisum.com" mobile="+91 99795 38985" />,
  },
  {
    path: "/about",
    title: "About",
    content: <About />,
  },
];
export default MenuItems;

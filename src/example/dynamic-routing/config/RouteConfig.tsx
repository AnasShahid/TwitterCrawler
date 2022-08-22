import React from "react";
import { Route } from "../interfaces/Route";
import Home from "../../../components/pages/Home";
import Contact from "../../../components/pages/Contact";
import About from "../../../components/pages/About";

const MenuItems: Array<Route> = [
  { path: "/", title: "Tweet", content: <Home /> },
  {
    path: "/users",
    title: "Users",
    content: <Contact email="haris@nisum.com" mobile="+91 99795 38985" />,
  },
  {
    path: "/default-tweets",
    title: "Default Tweets",
    content: <About />,
  },
];
export default MenuItems;

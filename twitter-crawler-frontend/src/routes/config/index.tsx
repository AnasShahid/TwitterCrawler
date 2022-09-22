import React from "react";
import { Route } from "../../interfaces";
import Home from "../../components/common/HomePage";
import Contact from "../../example/pages/Contact";

const MenuItems: Array<Route> = [
  { path: "/", title: "Tweet", content: <Home /> },
  {
    path: "/users",
    title: "Users",
    content: <Contact email="haris@nisum.com" mobile="+91 99795 38985" />,
  },
];
export default MenuItems;

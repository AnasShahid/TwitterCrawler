import React from "react";
import { Route } from "../model/Route";
import Home from "../components/Home";
import Contact from "../components/Contact";
import User from "../components/User";

const MenuItems: Array<Route> = [
  { path: "/", title: "Home", content: <Home />, exact: true },
  {
    path: "/contact",
    title: "Contact",
    content: <Contact email="haris@nisum.com" mobile="+91 99795 38985" />,
  },
  {
    path: "/user/:userId/:abcd",
    title: "About",
    containParam: true,
    params: [
      { id: "userId", value: "1" },
      { id: "name", value: "harry" },
    ],
    content: <User />,
  },
];
export default MenuItems;

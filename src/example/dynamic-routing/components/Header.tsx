import React from "react";
import MenuItems from "../config/RouteConfig";
import { Link } from "react-router-dom";

const Header = () => {
  // const createTo = (path: string, paramObj?: Array<Param>): string => {
  //   let newPath = path;
  //   paramObj!.forEach((p) => {
  //     newPath = newPath.replace(":" + p.id, p.value);
  //   });
  //   return newPath;
  // };
  return (
    <div>
      {MenuItems.map((menuItem) => (
        <Link key={menuItem.title} to={menuItem.path}>
          {menuItem.title + " "}
        </Link>
      ))}
    </div>
  );
};

export default Header;

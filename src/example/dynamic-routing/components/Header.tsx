import React from "react";
import MenuItems from "../routes/RouteConfig";
import { Link } from "react-router-dom";
import { Param } from "../model/Route";

const Header = () => {
  const createTo = (path: string, paramObj?: Array<Param>): string => {
    let newPath = path;
    for (const p of paramObj!) {
      newPath = newPath.replace(":" + p.id, p.value);
    }
    return newPath;
  };
  return (
    <div>
      {MenuItems.map((menuItem) => (
        <Link
          key={menuItem.title}
          to={
            menuItem.containParam
              ? createTo(menuItem.path, menuItem.params)
              : menuItem.path
          }
        >
          {menuItem.title + " "}
        </Link>
      ))}
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { Input, StyledInput, SearchFilter, SearchIcon } from "./style";

const SearchBar = () => {
  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const [searchValue, setSearchValue] = useState("");

  const Names = [
    "Haris Moin",
    "Haris Qadeer",
    "Fahad Ali",
    "Anas Shahid",
    "Hamza Malik",
  ];

  const filter = Names.filter((name) =>
    name.match(new RegExp(searchValue, "i"))
  ).map((name) => {
    return <li key={name}>{name} </li>;
  });

  return (
    <div>
      <StyledInput className={"inputWithIcon"}>
        <Input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Search"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        />
        <SearchFilter
          style={
            filter.length === 5 ? { display: "none" } : { display: "block" }
          }
        >
          {filter.length === 0 ? "No Data Found" : filter}
        </SearchFilter>
        <div className="left-icon">
          <SearchIcon />
        </div>
      </StyledInput>
    </div>
  );
};
export default SearchBar;

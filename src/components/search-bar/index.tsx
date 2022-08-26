import React, { useState } from "react";
import {
  Input,
  StyledInput,
  SearchFilter,
  SearchIcon,
  SearchIconContainer,
  SearchBarContainer,
  Select,
} from "./style";

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
    <SearchBarContainer>
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
        <Select className="right-icon">
          <option value="" hidden>
            All
          </option>
          <option value="1">Tweets</option>
          <option value="2">Users</option>
        </Select>
        <SearchIconContainer>
          <SearchIcon />
        </SearchIconContainer>
      </StyledInput>
    </SearchBarContainer>
  );
};
export default SearchBar;

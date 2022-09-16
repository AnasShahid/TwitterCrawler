import React, { useState } from "react";
import {
  Input,
  StyledInput,
  SearchIcon,
  SearchIconContainer,
  SearchBarContainer,
  Select,
} from "./style";

const SearchBar: React.FC = () => {
  const handleChange = (event: any) => {
    setSearchValue(event.target.value);
  };

  const [searchValue, setSearchValue] = useState("");

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

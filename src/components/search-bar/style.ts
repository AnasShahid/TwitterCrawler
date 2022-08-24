import styled from "styled-components";
import { Search } from "@styled-icons/material-outlined/Search";

export const Input = styled.input`
  height: 50px;
  font-size: 15px;
  width: 500px;
  border: 2px solid #aaa;
  border-radius: 30px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;
  cursor: text

  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  :focus + .left-icon {
    svg {
      fill: dodgerBlue;
    }
  }
`;

export const SearchFilter = styled.div`
  position: absolute;
  list-style: none;
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  border: 1px gray;
  -webkit-box-shadow: 0px 3px 8px 2px #ccc;
  padding: 11px 20px;
  border-radius: 10px;
`;

export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    left: 15px;
    top: 54%;
    transform: translateY(-50%);
  }
`;
export const SearchIcon = styled(Search)`
  width: 30px;
  &:hover {
    fill: dodgerBlue;
    transition: 0.3s;
    cursor: pointer;
  }
`;

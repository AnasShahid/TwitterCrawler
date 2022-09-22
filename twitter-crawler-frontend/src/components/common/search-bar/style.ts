import styled from "styled-components";
import { Search } from "@styled-icons/material-outlined/Search";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;

export const Input = styled.input`
  height: 50px;
  font-size: 15px;
  width: 60vw;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;
  cursor: text;
`;

export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }
`;
export const SearchIconContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 54%;
  transform: translateY(-50%);
`;
export const SearchIcon = styled(Search)`
  width: 30px;
  &:hover {
    fill: dodgerBlue;
    transition: 0.3s;
    cursor: pointer;
  }
`;

export const Select = styled.select`
  border-radius: 0px 4px 4px 0px;
  position: absolute;
  top: 10px;
  right: 10px;
  width: auto;
  height: 46px;
  padding-left: 5px;
  font-size: 14px;
  color: #545151;
  outline: none;
  border-left: 2px solid #aaa;
  border-right: none;
  border-top: none;
  border-bottom: none;
  cursor: pointer;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
  overflow: hidden;
  border: 2px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  animation: scale 0.5 linear;

  @keyframes scale {
    from {
      transform: scale(0.5);
    }
  }

  img {
    display: block;
    width: 100%;
    max-width: 150px;
    height: 100%;
    object-fit: cover;
  }
  p {
    text-transform: capitalized;
    letter-spacing: 2px;
  }
  span {
    padding: 5px 20px;
    margin: 0 10px;
  }
`;

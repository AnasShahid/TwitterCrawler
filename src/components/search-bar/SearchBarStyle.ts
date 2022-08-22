import styled from "styled-components";

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

export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    left: 15px;
    top: 54%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }

  button.right-icon {
    background: none;
    border: none;
    position: absolute;
    right: 10px;
    top: 52%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }
`;

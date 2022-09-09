import styled from "styled-components";
import { color, flex, space, typography } from 'styled-system'

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

export const Flex: any = styled.section(
  {
    boxSizing: "border-box",
    minWidth: 0
  },
  flex,
  space,
  color
);
export const Text: any = styled.div`
  ${typography};
  ${color}
`;

export const Box = styled.div`
color: ${({ theme }) => theme.colors.yellow};
`
export const TextField = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  border: none;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.green2};
`;


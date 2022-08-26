import { Popover } from "rsuite";
import styled from "styled-components";

export const UserDetails = styled(Popover)`
  padding: 10px;
  background: #f9f7f8;
  width: 370px;
  border-radius: 16px;
  margin: 5px auto;
`;
export const AvatarContainer = styled.div`
  width: 25%;
`;
export const PopOverHeader = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const AddToAnalysisButton = styled.button`
  background: ${({ theme }) => theme.colors.black};
  padding: 8px 14px;
  font-weight: 600;
  color: white;
  border: 1px solid black;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
`;
export const PopOverBody = styled.div`
  padding: 10px;
  margin-left: 10px;
  h2 {
    font-size: 22px;
    line-height: 34px;
    color: ${({ theme }) => theme.colors.black};
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  h4 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 500;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const UserDiscription = styled.div`
  margin-top: 10px;
  flex-wrap: wrap;
  overflow-wrap: break-word;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

export const TextContainer = styled.div`
  font-weight: 500;
  text-align: left;
  font-size: 16px;
  .hash-mention {
    color: ${({ theme }) => theme.colors.lightBlue};
    font-weight: 600;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
export const Connections = styled.div`
  margin: 10px 0;
  width: 80%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: grey;
  font-weight: 700;
  span {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    color: ${({ theme }) => theme.colors.black};
  }
`;

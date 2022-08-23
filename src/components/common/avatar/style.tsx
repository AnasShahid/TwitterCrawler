import styled from "styled-components";
interface StyleAvatar {
  width?: string;
  height?: string;
}
export const ImgContainer = styled.div<StyleAvatar>`
  width: ${(p: StyleAvatar) => p.width};
  height: ${(p: StyleAvatar) => p.height};
  margin: 7px auto;
`;
export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

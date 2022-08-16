import styled from 'styled-components'
import { color, flex, space, typography } from 'styled-system'

export const Box = styled.div`
  ${color}
`
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

const theme = {
  space: [4, 8, 12, 16, 32, 64, 128],
  fontSizes: [16, 18, 24, 28],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: [1.5, 1.8, 2, 2.5],
  borders: ["2px solid", "4px solid", "6px solid", "8px solid", "10px solid"],
  radii: [0, 2, 4, 6, 8, 10, 12, 16],
  colors: {
    info: "#1ecbe1",
    primary: "#1676e9",
    danger: "#e72918",
    success: "#6bc33c",
    warning: "#fff900",
    blacks: [
      "rgba(0,0,0)",
      "rgba(0,0,0,.1)",
      "rgba(0,0,0,.2)",
      "rgba(0,0,0,.25)",
      "rgba(0,0,0,.3)",
      "rgba(0,0,0,.4)",
      "rgba(0,0,0,.5)",
      "rgba(0,0,0,.6)",
      "rgba(0,0,0,.7)",
      "rgba(0,0,0,.8)",
      "rgba(0,0,0,.9)",
    ],
    whites: [
      "rgba(255,255,255,.1)",
      "rgba(255,255,255,.2)",
      "rgba(255,255,255,.3)",
      "rgba(255,255,255,.4)",
      "rgba(255,255,255,.5)",
      "rgba(255,255,255,.6)",
      "rgba(255,255,255,.7)",
      "rgba(255,255,255,.8)",
      "rgba(255,255,255,.9)",
    ],
  },
};
export default theme;

// export const base = {
//   space: ["0px", "2px", "4px", "8px", "16px", "32px", "64px"],
//   fonts: {
//     heading: "Inter, system-ui, sans-serif",
//     body: "Inter, system-ui, sans-serif",
//   },
//   fontSizes: ["12px", "14px", "16px", "20px", "24px"],
// };
// export const light = {
//   primary: "white",
//   background: "#ffffff",
//   nav: "#f8f8f8",
//   border: "#deebf1",
//   text: "#202224",
// };
// export const dark = {
//   primary: "#4851f4",
//   background: "#1f2023",
//   nav: "#27282b",
//   border: "#303236",
//   text: "#f8f8f8",
// };
// export const ThemeColors = {
//   colors: {
//     black: '#000e1a',
//     white: '#fff',
//     blue: '#007ce0',
//     navy: '#004175',
//   },
// }

